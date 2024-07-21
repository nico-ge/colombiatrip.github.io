import Block from "@/app/components/Block";
import Button from "@/app/components/Button";
import Image from "next/image";

export default function Landing() {

    return (
        <Block className="min-h-screen">
            <div className="flex space-x-20 space-y-20 flex-wrap flex-1 content-center mx-20">
                <div className="flex-1 grow">
                    <p className="mb-1 font-sans text-lg font-bold uppercase ">
                        Yes, I have too much free time.
                    </p>
                    <h1 className="mb-11 text-8xl sm:text-8xl md:text-8xl xl:text-8xl uppercase font-extrabold leading-none">
                        That Colombia trip.
                    </h1>
                    <p className="mb-9 font-sans text-xl font-semibold tracking-px">
                        Welcome folks! As promised, this is the plan for the trip to Colombia happening this December. As promised, here you will find details about the itinerary, potential dates, timelines, places, and, of course, price estimates. If you are coming, let me know before the 1st of October.
                    </p>
                    <div className="flex space-x-4">
                        <Button btnType="primary">
                            Tell me more!
                        </Button>
                    </div>
                </div>
                <div className="relative flex-1 lg:block hidden">
                    <div className="absolute z-10 right-10 -top-4">
                        <div className="bg-black  rounded-full">
                            <div className="block -translate-x-1 -translate-y-1 rounded-full border-2 
                     border-black px-4 text-lg uppercase font-bold
                     transition-all bg-white">
                                Colombia BTW
                            </div>
                        </div>
                    </div>
                    <div className="bg-black rounded-lg flex flex-1 flex-row h-full">
                        <div className="flex flex-1 justify-center items-center -translate-x-3 -translate-y-3 rounded-md border-2 
                        border-black p-4 text-2xl uppercase font-bold
                        transition-all bg-lime-200">
                                                        <Image src="/img/col.png" alt="Map of colombia" className="grayscale" width={350} height={350} />

                        </div>
                    </div>
                </div>
            </div>
        </Block>
    )
}