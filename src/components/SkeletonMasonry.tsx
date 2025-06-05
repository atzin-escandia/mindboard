const SkeletonMasonry = () => {
    const placeholders = new Array(15).fill(null);

    return (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
            {placeholders.map((_, i) => {
                const randomHeight = Math.floor(Math.random() * 200) + 150;
                return (
                    <div
                        data-testid="skeleton-placeholder"
                        key={i}
                        className="w-full bg-[var(--skeleton-bg,white)] animate-pulse rounded-xl mb-4 border border-[var(--border-color)] break-inside-avoid"
                        style={{ height: `${randomHeight}px` }}
                    />
                );
            })}
        </div>
    );
};

export default SkeletonMasonry;
