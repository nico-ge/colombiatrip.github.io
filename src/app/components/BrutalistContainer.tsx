export default function BrutalistContainer({ children, className }: any) {

    return (
        <div className="bg-black rounded-lg flex flex-1 flex-row h-full">
            <div className={`${className} 
            p-10
            flex flex-col flex-1 rounded-md border-2 
            border-black  text-2xl
            -translate-x-2 -translate-y-2
            transition-all`}>
                {children}
            </div>
        </div>
    )
}