import { useParams, useNavigate } from "react-router-dom";
import { ErrorState } from "@components/ui/ErrorState";
import { usePexelsPhotoById } from "@services/usePexels";
import Button from "@components/ui/Button";
import { BackIcon } from "@components/ui/Icons";
import CardInfo from "@components/SkeletonDetailCard";
import SkeletonDetailCard from "@components/ui/SkeletonCard";
import { Photo } from "@models/photoTypes";

const PhotoDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { data: photo, isError, isLoading } = usePexelsPhotoById(id);

    if (isError)
        return <ErrorState fullH message="Oops! Something failed, try again later!" />;

    return (
        <div className="sm:flex justify-center gap-5 items-center relative sm:h-[calc(100vh-120px)] h-screen  space-y-10 sm:space-y-0 m-5">
            <Button
                onClick={() => navigate(-1)}
                className="sm:absolute top-0 left-0 w-10 rounded-full flex items-center justify-center text-3xl"
            >
                <BackIcon />
            </Button>
            {isLoading ?
                <SkeletonDetailCard />
                : <>
                    <img
                        src={photo?.url}
                        alt={photo?.alt}
                        className="w-auto max-h-[calc(100vh-120px)] rounded-xl border border-[var(--border-color)] bg-white"
                        loading="lazy"
                    />
                    <CardInfo photo={photo as Photo} />
                </>}
        </div>
    );
};

export default PhotoDetail;
