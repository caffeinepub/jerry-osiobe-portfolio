import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Storage "blob-storage/Storage";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState); // Role-based access control system

  include MixinStorage(); // Blob storage system

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  type CertificateAsset = {
    filename : Text;
    uploadDate : Time.Time;
    blob : Storage.ExternalBlob;
    owner : Principal;
  };

  let certificates = Map.empty<Text, CertificateAsset>();

  public shared ({ caller }) func uploadCertificate(filename : Text, blob : Storage.ExternalBlob) : async CertificateAsset {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can upload certificates");
    };

    let certificateId = caller.toText() # "_" # filename;

    let asset : CertificateAsset = {
      filename;
      uploadDate = Time.now();
      blob;
      owner = caller;
    };

    certificates.add(certificateId, asset);
    asset;
  };

  public query func getAllCertificates() : async [CertificateAsset] {
    // Public portfolio view - no authentication required
    // Anyone (including guests) can view all certificates
    certificates.values().toArray();
  };
};
