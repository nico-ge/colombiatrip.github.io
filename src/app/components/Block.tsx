export default function Block({children, className, id}: any) {

    const a = ``
    return (
        <div id={id} className={`${className} flex flex-col`}>
            {children}
        </div>
    )
}