import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchPexelsImages, fetchPexelsPhotoById } from "./apiClient";
import { SimplePhoto } from "@models/photoTypes";

export const usePexelsImages = (query: string, perPage = 21) => {
	return useInfiniteQuery({
		queryKey: ["pexels", query],
		queryFn: ({ pageParam = 1 }) =>
			fetchPexelsImages(query, perPage, pageParam),
		getNextPageParam: (lastPage, allPages) => {
			if (lastPage.length === 0) return undefined;
			return allPages.length + 1;
		},
		initialPageParam: 1,
		enabled: !!query,
		staleTime: 5000 * 60 * 5,
	});
};

export const usePexelsPhotoById = (id?: string) => {
	return useQuery<SimplePhoto>({
		queryKey: ["pexels-photo", id],
		queryFn: () => {
			if (!id) throw new Error("Photo ID is required");
			return fetchPexelsPhotoById(id);
		},
		enabled: !!id,
		staleTime: 1000 * 60 * 5,
	});
};
