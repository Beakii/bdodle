'use client'
import { useEffect, useState } from "react";
import { BdodleAssistToolProps } from "../types";
import { DataTable } from "./assistTool/DataTable";
import { columns } from "./assistTool/columns";



const BdodleAssistTool = ({ nodesWithConLength }: BdodleAssistToolProps) => {


    return (
        <DataTable columns={columns} data={nodesWithConLength} />
    );
};

export default BdodleAssistTool;