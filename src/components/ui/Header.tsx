import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggle";
import SearchInput from "@components/SearchInput";
import { LogoIcon } from "./Icons";

export const Header = () => {
    return (
        <header className="fixed px-5 lg:px-20 xl:px-40 w-full z-10 h-[60px] bg-[var(--header-bg)] text-[var(--header-text)] border-b border-[var(--border-color)]">
            <div className="h-full flex justify-between items-center ">
                <Link className="flex items-center" to="/">
                    <LogoIcon size={40} />
                    <h1 className="ml-2 whitespace-nowrap font-extrabold text-xl md:text-2xl lg:text-3xl hidden sm:block">
                        Mindboard
                    </h1>
                </Link>
                <div className="flex gap-2 sm:gap-5">
                    <SearchInput />
                    <ThemeToggleButton />
                </div>
            </div>
        </header>
    );
};
