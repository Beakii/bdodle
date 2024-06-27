'use client'

const BdodleAnswersTableHeader = () => {

    return (
        <div id="results" className="pt-10">
            <div id="tableHeader" className="min-w-full flex justify-center">
                <div className="lg:w-40 md:w-36 sm:w-28 w-20 h-10 flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Name</h1>
                </div>
                <div className="lg:w-40 md:w-36 sm:w-28 w-20 h-10 flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Type</h1>
                </div>
                <div className="lg:w-40 md:w-36 sm:w-28 w-20 h-10 flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-[0.6rem] font-semibold">Contribution</h1>
                </div>
                <div className="lg:w-40 md:w-36 sm:w-28 w-20 h-10 flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-[0.6rem] font-semibold">Connection</h1>
                </div>
                <div className="lg:w-40 md:w-36 sm:w-28 w-20 h-10 flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Location</h1>
                </div>
                <div className="lg:w-40 md:w-36 sm:w-28 w-20 h-10 flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Territory</h1>
                </div>
            </div>
        </div>
    );
};

export default BdodleAnswersTableHeader;