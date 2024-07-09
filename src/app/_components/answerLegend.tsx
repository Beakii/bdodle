'use client'
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import TutorialModal from "./tutorialModal";

const AnswerLegend = () => {

    return (
        <div className=" w-full bottom-5 flex flex-col items-center">
            <h1>Answer Legend</h1>
            <div className="flex justify-center items-center mt-5">
                <div className="lg:size-20 size-16  border-2 border-stone-900 flex justify-center items-center bg-green-600">
                    <h1 className="text-sm">Correct</h1>
                </div>
                <div className="lg:size-20 size-16  border-2 border-stone-900 flex flex-col justify-center items-center text-wrap bg-yellow-600">
                    <h1 className="text-sm text-center">1 Word Correct</h1>
                </div>
                <div className="lg:size-20 size-16  border-2 border-stone-900 flex flex-col justify-center items-center text-wrap bg-yellow-600">
                    <h1 className="text-sm">Partial</h1>
                    <h1 className="text-sm">Close</h1>
                </div>
                <div className="lg:size-20 size-16  border-2 border-stone-900 flex justify-center items-center bg-red-600">
                    <h1 className="text-sm">Incorrect</h1>
                </div>
                <div className="lg:size-20 size-16 border-2 border-stone-900 flex flex-col justify-center items-center bg-red-600">
                    <h1 className="text-sm">Higher</h1>
                    <ArrowBigUp className="lg:size-10 size-8 text-black" />
                </div>
                <div className="lg:size-20 size-16 border-2 border-stone-900 flex flex-col justify-center items-center bg-red-600">
                    <h1 className="text-sm">Lower</h1>
                    <ArrowBigDown className="lg:size-10 size-8 text-black" />
                </div>
            </div>
            <TutorialModal />
        </div>
    );
};

export default AnswerLegend;