"use client"
import { ColumnDef } from "@tanstack/react-table"

export type NodeTable = {
    name: string;
    type: string;
    connections: number;
    contribution: number;
    territory: string;
}

export const columns: ColumnDef<NodeTable>[] = [
    {
        header: 'Name',
        accessorKey: 'name',
    },
    {
        header: 'Type',
        accessorKey: 'type',
    },
    {
        header: 'Connections',
        accessorKey: 'connections',
    },
    {
        header: 'Contribution',
        accessorKey: 'contribution',
    },
    {
        header: 'Territory',
        accessorKey: 'territory',
    },
]