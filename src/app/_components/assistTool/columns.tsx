"use client"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "~/components/ui/button";

export type NodeTable = {
    name: string;
    type: string;
    connections: number;
    contribution: number;
    territory: string;
}

export const columns: ColumnDef<NodeTable>[] = [
    {
        header: ({ column }) => {
            return (
                <Button
                    className="lg:text-xl text-xs font-semibold text-[#E8E4D9]"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        accessorKey: 'name',
    },
    {
        header: ({ column }) => {
            return (
                <Button
                    className="lg:text-xl text-xs font-semibold text-[#E8E4D9]"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Type
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        accessorKey: 'type',
    },
    // {
    //     header: ({ column }) => {
    //         return (
    //             <Button
    //                 className="lg:text-xl text-xs font-semibold text-[#E8E4D9]"
    //                 variant="ghost"
    //                 onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //             >
    //                 Connections
    //                 <ArrowUpDown className="ml-2 h-4 w-4" />
    //             </Button>
    //         )
    //     },
    //     accessorKey: 'connections',
    //     filterFn: 'equalsString'
    // },
    {
        header: ({ column }) => {
            return (
                <Button
                    className="lg:text-xl text-xs font-semibold text-[#E8E4D9]"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    CP
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        accessorKey: 'contribution',
        filterFn: 'equalsString'
    },
    {
        header: ({ column }) => {
            return (
                <Button
                    className="lg:text-xl text-xs font-semibold text-[#E8E4D9]"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Terr.
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        accessorKey: 'territory',
    },
]