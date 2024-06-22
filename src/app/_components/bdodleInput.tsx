
'use client';
import { useEffect, useState } from "react";
import { BdodleInputProps } from "../types";


const BdodleInput = ({ getInput, inputValue }: BdodleInputProps) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(inputValue);
    }, [inputValue]);

    return (
        <input
            placeholder="Enter a node name to guess..."
            className="lg:min-w-[35vw] lg:max-w-[35vw] min-w-[99vw] h-12 p-8 bg-yellow-950 border-2 border-yellow-700"
            onChange={(e) => getInput(e.target.value)}
            value={value}
        />
    );
};

export default BdodleInput;