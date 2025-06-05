import { SimplePhoto } from '@models/photoTypes'
import { LinkIcon, UserIcon } from '@components/ui/Icons'

type PhotoProps = {
    photo: SimplePhoto
}

const CardInfo = ({ photo }: PhotoProps) => {
    return (
        <div className="bg-[var(--header-bg)]/80 text-[var(--header-text)] border border-[var(--border-color)] rounded-3xl py-10 px-5 sm:w-[300px] w-full sm:absolute right-0 bottom-0">
            <h2 className="text-md md:text-lg lg:text-xl mb-5 text-center">{photo.alt}</h2>
            <div className="flex justify-center mb-2">
                <UserIcon className="w-5 h-5" />
                <p className="text-sm md:text-base lg:text-lg text-center ml-2 items-center flex">
                    <a
                        href={photo.photographer_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-xs md:text-sm lg:text-md hover:opacity-60"
                    >
                        {photo.photographer}
                    </a>
                </p>
            </div>
            <div className="flex justify-center">
                <LinkIcon className="w-5 h-5" />
                <p className="text-sm md:text-base lg:text-lg text-center ml-2 items-center flex">
                    <a
                        href={photo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-xs md:text-sm lg:text-md hover:opacity-60"
                    >
                        See full image
                    </a>
                </p>
            </div>
        </div>
    )
}

export default CardInfo
