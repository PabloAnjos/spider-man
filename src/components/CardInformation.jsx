



export function CardInformation({ title, content }) {
    return (
        <div className="w-[320px] h-[113px] text-white text-center">
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="text-sm font-normal mt-2">{content}</p>
        </div>
    )
}