import { useRef, useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { useOnScreen } from "@hooks/useOnScreen";
import { Photo } from "@models/photoTypes";

interface Props {
    photo: Photo;
}

const VirtualizedImage = ({ photo }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref as React.RefObject<Element>);
    const [shouldRender, setShouldRender] = useState(false);
    const aspectRatio = photo.width / photo.height;
    const paddingBottom = `${(1 / aspectRatio) * 100}%`;

    useEffect(() => {
        if (isVisible && !shouldRender) {
            setShouldRender(true);
        } else if (!isVisible && shouldRender) {
            setShouldRender(false);
        }
    }, [isVisible, shouldRender]);

    return (
        <div ref={ref} className="w-full">
            {shouldRender ? (
                <Link to={`/photo/${photo.id}`} className="transition-opacity duration-300 hover:opacity-80" >
                    <div
                        className="w-full bg-cover rounded-xl border border-black bg-white "
                        style={{
                            backgroundImage: `url(${photo.url})`,
                            paddingBottom: paddingBottom,
                        }}
                    />
                </Link>
            ) : (
                <div id="skeleton-card"
                    className="w-full bg-white rounded-xl border-black animate-pulse"
                    style={{
                        paddingBottom: paddingBottom,
                    }}
                />
            )}
        </div>
    );
};

export default memo(VirtualizedImage);
