
'use client';
const BdodleInput = ({ getInput }: { getInput: (value: string) => void }) => {
    return (
        <input placeholder="Enter a node name to guess..." onChange={(e) => getInput(e.target.value)} className="w-full h-12 p-8 bg-yellow-950 border border-yellow-700" />
    );
};

export default BdodleInput;