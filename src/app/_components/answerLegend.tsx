'use client'
import Arrow from "~/assets/png/bdoAssets/Arrow.png";

const AnswerLegend = () => {

    return (
        <div className="mt-[10vh] bottom-5 flex flex-col items-center">
            <h1>Answer Legend</h1>
            <div className="flex justify-center items-center mt-5 gap-5">
                <div className="size-20 flex justify-center items-center bg-green-600">
                    <h1>Correct</h1>
                </div>
                <div className="size-20 flex flex-col justify-center items-center text-wrap bg-yellow-600">
                    <h1>Partial</h1>
                    <h1>Close</h1>
                </div>
                <div className="size-20 flex justify-center items-center bg-red-600">
                    <h1>Incorrect</h1>
                </div>
                <div className="size-20 flex flex-col justify-center items-center bg-red-600">
                    <h1>Higher</h1>
                    <img className="size-10" src={Arrow.src}></img>
                </div>
                <div className="size-20 flex flex-col justify-center items-center bg-red-600">
                    <h1>Lower</h1>
                    <img className="size-10 rotate-180" src={Arrow.src}></img>
                </div>
            </div>
        </div>
    );
};

export default AnswerLegend;