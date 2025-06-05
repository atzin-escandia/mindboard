
const SkeletonDetailCard = () => {
    return (
        <>
            <div
                data-testid="skeleton-placeholder"
                className="w-[500px] bg-[var(--skeleton-bg,white)] animate-pulse rounded-xl mb-4 border border-[var(--border-color)] break-inside-avoid h-full"
            />
            <div className=" bg-[var(--skeleton-bg,white)] animate-pulse rounded-xl p-10 w-[300px] h-[200px] border border-black sm:absolute right-0 bottom-0 " />
        </>
    )
}

export default SkeletonDetailCard