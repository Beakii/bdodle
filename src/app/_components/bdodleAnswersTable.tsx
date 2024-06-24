'use client'

const BdodleAnswersTableHeader = () => {

    return (
        <div id="results" className="pt-10">
            <div id="tableHeader" className="min-w-full flex justify-center lg:gap-5">
                <div className="lg:mt-5 mt-1 lg:min-w-[10vw] min-w-[20vw] h-[4vh] flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Name</h1>
                </div>
                <div className="lg:mt-5 mt-1 lg:min-w-[10vw] min-w-[20vw] h-[4vh] flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Type</h1>
                </div>
                <div className="lg:mt-5 mt-1 lg:min-w-[10vw] min-w-[20vw] h-[4vh] flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Contribution</h1>
                </div>
                <div className="lg:mt-5 mt-1 lg:min-w-[10vw] min-w-[20vw] h-[4vh] flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Connection</h1>
                </div>
                <div className="lg:mt-5 mt-1 lg:min-w-[10vw] min-w-[18.6vw] h-[4vh] flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Territory</h1>
                </div>
            </div>
        </div>
    );
};

export default BdodleAnswersTableHeader;