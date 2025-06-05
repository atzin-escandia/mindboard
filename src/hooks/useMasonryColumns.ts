import { useMemo } from "react";
import { Photo } from "@models/photoTypes";

export const useMasonryColumns = (photos: Photo[]) => {
	const columnCount = 3;

	return useMemo(() => {
		const cols: Photo[][] = Array.from({ length: columnCount }, () => []);
		const heights = Array(columnCount).fill(0);

		photos.forEach((photo) => {
			const heightRatio = photo.height / photo.width;
			const smallest = heights.indexOf(Math.min(...heights));
			cols[smallest].push(photo);
			heights[smallest] += heightRatio;
		});

		return cols;
	}, [photos, columnCount]);
};
