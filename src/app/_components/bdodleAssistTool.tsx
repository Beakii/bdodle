'use client'
import { useEffect, useState } from "react";
import { BdodleAssistToolProps } from "../types";
import { DataTable } from "./assistTool/DataTable";
import { columns } from "./assistTool/columns";



const BdodleAssistTool = ({ nodesWithConLength, setToggleAssist }: BdodleAssistToolProps) => {


    return (
        <DataTable columns={columns} data={nodesWithConLength} setToggleAssist={setToggleAssist} />
    );
};

export default BdodleAssistTool;