import clsx from "clsx";
import { CloudIcon } from "./Icons";

export const EmptyState = ({
    message = "No data available", className, fullH
}: {
    message?: string, className?: string, fullH?: boolean;
}) => {
    return (
        <div className={clsx("flex-col flex justify-around items-center h-40", fullH && "h-[calc(100vh-180px)]")}>
            <div className="flex flex-col justify-center items-center gap-5">
                <CloudIcon />
                <span className={clsx('text-2xl font-semibold', className)}>{message}</span>
            </div>
        </div>

    );
}
