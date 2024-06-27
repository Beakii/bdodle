'use client'
import Arrow from "~/assets/png/bdoAssets/Arrow.png";

const AnswerLegend = () => {

    return (
        <div className="mt-[10vh] w-full bottom-5 flex flex-col items-center">
            <h1>Answer Legend</h1>
            <div className="flex justify-center items-center mt-5">
                <div className="lg:size-20 size-16  border-2 border-stone-900 flex justify-center items-center bg-green-600">
                    <h1 className="text-sm">Correct</h1>
                </div>
                <div className="lg:size-20 size-16  border-2 border-stone-900 flex flex-col justify-center items-center text-wrap bg-yellow-600">
                    <h1 className="text-sm">Partial</h1>
                    <h1 className="text-sm">Close</h1>
                </div>
                <div className="lg:size-20 size-16  border-2 border-stone-900 flex justify-center items-center bg-red-600">
                    <h1 className="text-sm">Incorrect</h1>
                </div>
                <div className="lg:size-20 size-16  border-2 border-stone-900 flex flex-col justify-center items-center bg-red-600">
                    <h1 className="text-sm">Higher</h1>
                    <img className="lg:size-10 size-8" src={Arrow.src}></img>
                </div>
                <div className="lg:size-20 size-16  border-2 border-stone-900 flex flex-col justify-center items-center bg-red-600">
                    <h1 className="text-sm">Lower</h1>
                    <img className="lg:size-10 size-8 rotate-180" src={Arrow.src}></img>
                </div>
            </div>
        </div>
    );
};

export default AnswerLegend;