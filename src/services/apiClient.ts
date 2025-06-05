import axios from "axios";
import { Photo, SimplePhoto } from "@models/photoTypes";

const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const PEXELS_API_URL = import.meta.env.VITE_PEXELS_API_URL;

export const fetchPexelsImages = async (
	query: string,
	perPage = 10,
	page = 1
) => {
	const response = await axios.get(`${PEXELS_API_URL}/search`, {
		headers: {
			Authorization: PEXELS_API_KEY,
		},
		params: {
			query,
			per_page: perPage,
			page,
		},
	});

	const photos = response.data.photos ?? [];

	return photos.map((photo: Photo) => ({
		id: photo.id,
		url: photo.src.large,
		alt: photo.alt || "Pexels image",
		height: photo.height,
		width: photo.width,
		src: {
			small: photo.src.small,
			medium: photo.src.medium,
			large: photo.src.large,
		},
	}));
};

export const fetchPexelsPhotoById = async (
	id: string
): Promise<SimplePhoto> => {
	const response = await axios.get(`${PEXELS_API_URL}/photos/${id}`, {
		headers: {
			Authorization: PEXELS_API_KEY,
		},
	});

	const photo = response.data;

	return {
		id: photo.id,
		url: photo.src.large2x,
		alt: photo.alt,
		photographer: photo.photographer,
		photographer_url: photo.photographer_url,
	};
};
