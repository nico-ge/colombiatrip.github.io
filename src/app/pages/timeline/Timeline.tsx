import Block from "@/app/components/Block";
import BrutalistContainer from "@/app/components/BrutalistContainer";
import Button from "@/app/components/Button";

const stages = [{
    color: "bg-yellow-200",
    title: "Make a decission",
    subtitle: "Now - Sep 30th",
    content: "If you decide to come, you will need to let me know before the end of September. By then, we should already have a rough"
        + " plan regarding dates. So, if you prefer to book in advance your plane tickets to Colombia, you can also do it during this time."
}, {
    color: "bg-blue-300",
    title: "Book everything",
    subtitle: "Oct 1st - Nov 30",
    content: "It is time to book stuff! If you have not booked your plane tickets to Colombia, you should do it before the prices go up. I recommend you to create a price alert in Kiwi or Skyscanner so you can see the trend."
        + " In parallel, we will start booking the tickets, hostels, and hotels that we will need during the trip. Flying inside Colombia may be a bit expensive"
        + ", so we can consider taking overnight buses to some places."
}, {
    color: "bg-red-300",
    title: "Finally We travel",
    subtitle: "Dec 1st - Dec 15th",
    content: "Not much to say here. The exact dates may change based on the plan, but we will spend around 10-15 days during early December. We will see many different biomes so pack for non-luxembourgish summer and spring."
}]

export default function Timeline() {
    return (
        <Block id="#timeline" className="min-h-96 -my-44">
            <div className="grid gap-10 flex-1 grid-cols-3 p-20">

                {stages.map((stage, index) => {
                    return (
                        <BrutalistContainer key={stage.title} className={stage.color}>
                            <h5 className="text-xl uppercase font-extrabold">
                                {index + 1}. {stage.title}
                            </h5>
                            <p className="mb-2 text-lg  text-opacity-5 uppercase font-extrabold">{stage.subtitle}</p>
                            <p className="text-black text-lg font-sans font-semibold tracking-px">{stage.content}</p>
                        </BrutalistContainer>
                    )
                })}
            </div>
            <div>
                <Button>Nicolás! Stop yapping and show me the places</Button>
            </div>
        </Block>
    )
} 