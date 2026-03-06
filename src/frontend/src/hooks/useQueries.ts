import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CertificateAsset } from "../backend";
import type { ExternalBlob } from "../backend";
import { useActor } from "./useActor";

export function useGetAllCertificates() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<CertificateAsset[]>({
    queryKey: ["certificates"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getAllCertificates();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useUploadCertificate() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      filename,
      blob,
    }: { filename: string; blob: ExternalBlob }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.uploadCertificate(filename, blob);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["certificates"] });
    },
  });
}

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery({
    queryKey: ["currentUserProfile"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: { name: string }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUserProfile"] });
    },
  });
}
