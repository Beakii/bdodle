"use client"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    getFilteredRowModel,
    ColumnFiltersState,
} from "@tanstack/react-table"
import { SetStateAction, useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card"
import { HoverCardContent } from "~/components/ui/hover-card"
import GoBackArrow from "~/assets/png/bdoAssets/goBackArrow.png"
import Image from "next/image";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    setToggleAssist: (toggleAssist: boolean) => void
}

export function DataTable<TData, TValue>({ columns, data, setToggleAssist }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [typeFilterButton, setTypeFilterButton] = useState<string>("All")
    //const [connectionFilterButton, setConnectionFilterButton] = useState<string>("All")
    const [contributionFilterButton, setContributionFilterButton] = useState<string>("All")
    const [territoryFilterButton, setTerritoryFilterButton] = useState<string>("All")
    const [isClearFilter, setIsClearFilter] = useState<boolean>(false)

    useEffect(() => {
        loadFilter();
    }, [])


    useEffect(() => {
        if (columnFilters.length > 0) {
            setIsClearFilter(true);
            saveFilter();
        }
    }, [columnFilters])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        enableColumnFilters: true,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    })

    function saveFilter() {
        localStorage.setItem("filter", JSON.stringify(table.getState().columnFilters))
    }

    function loadFilter() {
        const filter = localStorage.getItem("filter")
        if (filter) {
            const jsonFilter = JSON.parse(filter)
            setColumnFilters(jsonFilter)

            jsonFilter.forEach((filter: { id: string; value: SetStateAction<string> }) => {
                if (filter.id === "type") {
                    setTypeFilterButton(filter.value)
                }
                // else if (filter.columnId === "connections") {
                //     setConnectionFilterButton(filter.value)
                // }
                else if (filter.id === "contribution") {
                    setContributionFilterButton(filter.value)
                }
                else if (filter.id === "territory") {
                    setTerritoryFilterButton(filter.value)
                }
            });
        }
    }

    function handleTypeFilterClick(name: string) {
        setTypeFilterButton(name)
        if (name === "All") {
            table.getColumn("type")?.setFilterValue("")
        }
        else {
            table.getColumn("type")?.setFilterValue(name)
        }
    }

    // function handleConnectionFilterClick(name: string) {
    //     setConnectionFilterButton(name)
    //     if (name === "All") {
    //         table.getColumn("connections")?.setFilterValue("")
    //     }
    //     else {
    //         table.getColumn("connections")?.setFilterValue(name)
    //     }
    // }

    function handleContributionFilterClick(name: string) {
        setContributionFilterButton(name)
        if (name === "All") {
            table.getColumn("contribution")?.setFilterValue("")
        }
        else {
            table.getColumn("contribution")?.setFilterValue(name)
        }
    }

    function handleTerritoryFilterClick(name: string) {
        setTerritoryFilterButton(name)
        if (name === "All") {
            table.getColumn("territory")?.setFilterValue("")
        }
        else {
            table.getColumn("territory")?.setFilterValue(name)
        }
    }

    function clearFilters() {
        setIsClearFilter(false)
        table.getColumn("type")?.setFilterValue("")
        table.getColumn("contribution")?.setFilterValue("")
        table.getColumn("territory")?.setFilterValue("")
        setTypeFilterButton("All")
        setContributionFilterButton("All")
        setTerritoryFilterButton("All")
    }

    return (
        <div className="flex justify-center max-w-full min-w-full ">
            <div className="lg:max-h-[70vh] lg:min-h-[70vh] lg:max-w-[60vw] lg:min-w-[50vw] lg:mt-16 my-[2.5vh] flex flex-col max-w-full max-h-[80vh] bg-yellow-950 text-[#E8E4D9] border-2 border-yellow-700">
                <Button
                    onClick={() => setToggleAssist(false)}
                    className="relative ml-auto lg:max-w-[10vw] max-w-[20vw] bg-[#E8E4D9] border-b-2 border-l-2 border-yellow-700 hover:shadow-md hover:bg-neutral-100 rounded-tr-none rounded-br-none rounded-tl-none">
                    <Image src={GoBackArrow.src} alt="Go Back" height={32} width={32} loading="lazy" />
                </Button>
                <div className="flex justify-center">
                    <HoverCard>
                        <HoverCardTrigger>
                            <h1 onClick={clearFilters} className="lg:text-4xl flex justify-center items-center p-2 m-2 lg:max-w-[20vw] border-2 border-yellow-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 cursor-pointer">
                                {isClearFilter ? "Clear All" : "Filters"}
                            </h1>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            {"Will clear all filters applied to the table"}
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div className="flex justify-evenly m-5">
                    <div className="flex text-center my-auto p-3 border-2 border-yellow-700">
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                className="transition-colors hover:bg-neutral-100 hover:text-neutral-900 p-1">{"Node Type: " + typeFilterButton}</DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="bg-yellow-950 border-2 border-yellow-700 text-[#E8E4D9]">
                                <DropdownMenuItem
                                    onClick={() => handleTypeFilterClick("All")}>
                                    All
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => handleTypeFilterClick("Town")}>
                                    Town
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTypeFilterClick("City")}>
                                    City
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTypeFilterClick("Connection")}>
                                    Connection
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTypeFilterClick("Danger")}>
                                    Danger
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTypeFilterClick("Gateway")}>
                                    Gateway
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTypeFilterClick("Trading Post")}>
                                    Trading Post
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex text-center my-auto p-3 border-2 border-yellow-700">
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                className="transition-colors hover:bg-neutral-100 hover:text-neutral-900 p-1">{"Node Contribution Points: " + contributionFilterButton}</DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="bg-yellow-950 border-2 border-yellow-700 text-[#E8E4D9]">
                                <DropdownMenuItem
                                    onClick={() => handleContributionFilterClick("All")}>
                                    All
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => handleContributionFilterClick("1")}>
                                    1
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleContributionFilterClick("2")}>
                                    2
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleContributionFilterClick("3")}>
                                    3
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex text-center my-auto p-3 border-2 border-yellow-700">
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                className="transition-colors hover:bg-neutral-100 hover:text-neutral-900 p-1">{"Node Territory: " + territoryFilterButton}</DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="bg-yellow-950 border-2 border-yellow-700 text-[#E8E4D9]">
                                <DropdownMenuItem
                                    onClick={() => handleTerritoryFilterClick("All")}>
                                    All
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => handleTerritoryFilterClick("Balenos")}>
                                    Balenos
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTerritoryFilterClick("Serendia")}>
                                    Serendia
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTerritoryFilterClick("Calpheon")}>
                                    Calpheon
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTerritoryFilterClick("Mediah")}>
                                    Mediah
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTerritoryFilterClick("Valencia")}>
                                    Valencia
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTerritoryFilterClick("Kamasylvia")}>
                                    Kamasylvia
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTerritoryFilterClick("Drieghan")}>
                                    Drieghan
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTerritoryFilterClick("O'dyllita")}>
                                    O'dyllita
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTerritoryFilterClick("Mountain of Eternal Winter")}>
                                    Mountain of Eternal Winter
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTerritoryFilterClick("Land of Morning Light")}>
                                    Land of Morning Light
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => handleTerritoryFilterClick("Ulukita")}>
                                    Ulukita
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <Table
                    className="border-b border-t">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="lg:text-xl text-xs font-semibold text-[#E8E4D9]">
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow className="text-[#E8E4D9]"
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <div className="flex items-center justify-center space-x-2 py-4">
                    <Button
                        className="bg-yellow-950 text-[#E8E4D9] border-2 border-yellow-700"
                        size="lg"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {"<"}
                    </Button>
                    <div className="p-2">
                        {table.getState().pagination.pageIndex + 1 + "/" + table.getPageCount()}
                    </div>
                    <Button
                        className="bg-yellow-950 text-[#E8E4D9] border-2 border-yellow-700"
                        size="lg"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {">"}
                    </Button>
                </div>
            </div>
        </div>
    )
}
