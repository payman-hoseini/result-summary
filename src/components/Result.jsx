export default function Result(){
    return (
        <>
            <div className="md:rounded-3xl rounded-b-3xl bg-gradient-to-t from-Light-royal-blue to-Light-slate-blue flex flex-col items-center py-5 px-10 font-Hanken">
                <h2 className="text-Light-lavender text-lg">Your Result</h2>
                <div className="flex flex-col items-center justify-center mt-5 bg-gradient-to-b from-Violet-blue to-Persian-blue w-36 h-36 rounded-full">
                    <span className="text-white font-extrabold text-5xl">76</span>
                    <span className="text-Light-lavender opacity-55 text-xs mt-2">of 100</span>
                </div>
                <span className="mt-5 text-2xl text-white font-bold">Great</span>
                <p className="text-sm text-Light-lavender mt-3 text-center">You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </>
    )
}