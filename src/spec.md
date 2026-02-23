# Specification

## Summary
**Goal:** Remove a specific certificate from the certificates gallery grid.

**Planned changes:**
- Remove the certificate entry at grid position div[5] from the CertificatesFolder component array
- Delete the corresponding certificate image file from the assets directory
- Ensure the grid layout adjusts automatically after removal

**User-visible outcome:** The certificate at the specified grid position is no longer displayed in the certificates gallery, and the remaining certificates adjust to fill the space.
