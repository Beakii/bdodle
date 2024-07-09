'use client'
import {
    Tutorial100,
    Tutorial200,
    Tutorial210,
    Tutorial220,
    Tutorial230,
    Tutorial240,
    Tutorial250,
    Tutorial260,
    Tutorial300
} from "../imageImports";
import Image from "next/image";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "~/components/ui/pagination"



const TutorialModal = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const pageContent = [
        {
            title: "BDOdle",
            description: "A Wordle inspired game for Black Desert Online. The goal is to guess the node of the day by using the hints given from your guesses.",
            image: ""
        },
        {
            title: "Daily",
            description: "Similarly to Wordle and other daily games, you have unlimited attempts to guess the correct node. The game will reset every day at 00:00 UTC when a new node is selected.",
            image: ""
        },
        {
            title: "Arcade",
            description: "Similar to the daily game mode, except you can replay as much as you want!",
            image: ""
        },
        {
            title: "How to play",
            description: "Start typing and select a random node to begin guessing.",
            image: Tutorial100
        },
        {
            title: "Answer Row",
            description: "Each aspect of the node you selected will be evaluated and give you hints to help you guess the correct node.",
            image: Tutorial200
        },
        {
            title: "Name",
            description: "Name of the node you selected.",
            image: Tutorial210
        },
        {
            title: "Node Type",
            description: "The type of node you have selected. E.g. City, Gateway, Trading Post, Connection, Danger, Town.",
            image: Tutorial220
        },
        {
            title: "Contribution Points",
            description: "The amount of contribution points required to connect/invest in the node you selected.",
            image: Tutorial230
        },
        {
            title: "Connections",
            description: "The amount of nodes that are connected to the node you selected.",
            image: Tutorial240
        },
        {
            title: "Location",
            description: "The arrow points to the location of the correct node, from the node you selected.",
            image: Tutorial250
        },
        {
            title: "Territory",
            description: "The territory of the node you selected.",
            image: Tutorial260
        },
        {
            title: "Answer Legend",
            description: "An answer legend will be visible under the answer table for your reference.",
            image: Tutorial300
        },
        {
            title: "Good Luck!",
            description: "",
            image: ""
        },
    ];

    function updatePageNumber(direction: string) {
        if (direction === "prev") {
            setCurrentPage((currentPage - 1 + pageContent.length) % pageContent.length);
        }
        else {
            setCurrentPage((currentPage + 1) % pageContent.length);
        }
    }

    return (
        <Dialog>
            <DialogTrigger className="border-2 border-yellow-700 bg-yellow-950 hover:bg-yellow-950 hover:opacity-75 p-2 mt-4"> Need help?</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{pageContent[currentPage]?.title}</DialogTitle>
                    <DialogDescription>
                        {pageContent[currentPage]?.description}
                        {pageContent[currentPage]?.image !== "" && <Image src={pageContent[currentPage]?.image} width={500} height={200} alt="tutorial image" className="mt-2" />}
                    </DialogDescription>
                </DialogHeader>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious className="cursor-pointer select-none" onClick={() => { updatePageNumber("prev") }} />
                        </PaginationItem>
                        <PaginationItem>
                            {currentPage + 1 + "/" + pageContent.length}
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext className="cursor-pointer select-none" onClick={() => { updatePageNumber("next") }} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </DialogContent>
        </Dialog>
    );
};

export default TutorialModal;