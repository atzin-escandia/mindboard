import { useEffect, useRef } from "react";

interface InfiniteScrollOptions {
	hasNextPage?: boolean;
	isFetching?: boolean;
	onLoadMore: () => void;
	offset?: number;
}

const useInfiniteScroll = ({
	hasNextPage,
	isFetching,
	onLoadMore,
	offset = 200,
}: InfiniteScrollOptions) => {
	const isLoadingRef = useRef(false);

	useEffect(() => {
		isLoadingRef.current = isFetching ?? false;
	}, [isFetching]);

	useEffect(() => {
		const handleScroll = () => {
			if (!hasNextPage || isLoadingRef.current) return;

			const { scrollTop, clientHeight, scrollHeight } =
				document.documentElement;

			if (scrollTop + clientHeight >= scrollHeight - offset) {
				isLoadingRef.current = true;
				onLoadMore();
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [hasNextPage, onLoadMore, offset]);
};

export default useInfiniteScroll;
