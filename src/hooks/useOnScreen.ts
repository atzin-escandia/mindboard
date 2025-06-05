import { useState, useEffect } from "react";

const observers = new Map<Element, IntersectionObserver>();

export const useOnScreen = (
	ref: React.RefObject<Element>,
	rootMargin = "100px"
) => {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const node = ref.current;
		const observer = new IntersectionObserver(
			([entry]) => setIntersecting(entry.isIntersecting),
			{ rootMargin }
		);

		observer.observe(node);
		observers.set(node, observer);

		return () => {
			observer.unobserve(node);
			observers.delete(node);
		};
	}, [ref.current]);

	return isIntersecting;
};
