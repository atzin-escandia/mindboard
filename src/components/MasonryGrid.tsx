import { memo } from "react";
import { Photo } from "@models/photoTypes";
import { useMasonryColumns } from "@hooks/useMasonryColumns";
import VirtualizedImage from "./VirtualizedImage";

interface MasonryGridProps {
    photos: Photo[];
    isLoadingMore?: boolean;
}

const MasonryGrid = ({ photos, isLoadingMore = false }: MasonryGridProps) => {
    const columns = useMasonryColumns(photos);
    const skeletonsPerColumn = 20;

    return (
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-stretch">
            {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4 min-h-[100px]">
                    {col.map((photo) => (
                        <VirtualizedImage key={photo.id} photo={photo} />
                    ))}
                    {isLoadingMore &&
                        Array.from({ length: skeletonsPerColumn }).map((_, index) => (
                            <div
                                key={`skeleton-${index}`}
                                className="w-full aspect-[3/4] bg-white rounded-xl animate-pulse border border-black"
                            />
                        ))}
                </div>
            ))}
        </div>
    );
};

export default memo(MasonryGrid);
