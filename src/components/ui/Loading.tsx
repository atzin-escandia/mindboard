import clsx from "clsx";

const Loading = ({ fullH }: { fullH?: boolean }) => {
    return (
        <div className={clsx("flex justify-center items-center", fullH && "h-[calc(100vh-180px)]")}>
            <div className="w-6 h-6 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;
