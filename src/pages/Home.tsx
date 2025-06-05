import { useMemo, Suspense, lazy, useCallback } from "react";
import { usePexelsImages } from "@services/usePexels";
import useDebounce from "@hooks/useDebounce";
import useInfiniteScroll from "@hooks/useInfiniteScroll";
import { ErrorState } from "@components/ui/ErrorState";
import SkeletonMasonry from "@components/SkeletonMasonry";
import { useFilter } from "@context/FilterContext";
import { EmptyState } from "@components/ui/EmptyState";

const MasonryGrid = lazy(() => import("@components/MasonryGrid"));

const Home = () => {
    const { searchQuery } = useFilter();
    const debouncedQuery = useDebounce(searchQuery, 300);

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        isPending,
    } = usePexelsImages(debouncedQuery || "cat");

    const isFetchingOrPending = isFetchingNextPage || isPending;

    const handleLoadMore = useCallback(() => {
        if (!isFetchingOrPending) {
            fetchNextPage();
        }
    }, [isFetchingOrPending, fetchNextPage]);

    useInfiniteScroll({
        hasNextPage,
        isFetching: isFetchingOrPending,
        onLoadMore: handleLoadMore,
        offset: 300,
    });

    const photos = useMemo(() => data?.pages.flat() ?? [], [data]);

    if (isError)
        return <ErrorState fullH message="Oops! Something failed, try again later!" />;

    return (
        <section className="px-5 lg:px-20 xl:px-40">
            <Suspense fallback={<SkeletonMasonry />}>
                <MasonryGrid photos={photos} isLoadingMore={isFetchingNextPage} />
            </Suspense>
            {isLoading && <SkeletonMasonry />}
            {!photos.length && !isLoading && <EmptyState fullH />}
        </section>
    );
};

export default Home;
