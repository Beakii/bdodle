import { Node } from "./types";

export const obfuscation = 184523;

export function validateName(node: Node, correctNode: Node) {
    if (node.name === correctNode?.name) {
        return "🟩";
    }
    const containsWord = correctNode?.name?.split(' ').some(word => node.name?.includes(word));
    if (containsWord) {
        return "🟨";
    }
    return "🟥";
}

export function validateType(node: Node, correctNode: Node) {
    const guessNodeType = node.type?.replace(/\s/g, '') ?? "";
    const correctNodeType = correctNode?.type?.replace(/\s/g, '') ?? "";
    if (guessNodeType === correctNodeType) {
        return "🟩";
    }
    return "🟥";
}

export function validateContribution(node: Node, correctNode: Node) {
    if (node.contribution === correctNode?.contribution) {
        return "🟩";
    }
    if (Math.abs(node.contribution - correctNode?.contribution) <= 1) {
        return "🟨";
    }
    return "🟥";
}

export function validateConnections(node: Node, correctNode: Node) {
    if (node.connections.length === correctNode?.connections.length) {
        return "🟩";
    }
    if (Math.abs(node.connections.length - correctNode?.connections.length) <= 1) {
        return "🟨";
    }
    return "🟥";
}

export function validateLocation(node: Node, correctNode: Node) {
    const guessNode = node.territory?.replace(/\s/g, '') ?? "";
    const correctNodeNoSpace = correctNode?.territory?.replace(/\s/g, '') ?? "";
    if (node.coordinates?.[0] === correctNode?.coordinates?.[0] && node.coordinates?.[1] === correctNode?.coordinates?.[1]) {
        return "🟩";
    }
    if (guessNode === correctNodeNoSpace) {
        return "🟨";
    }
    return "🟥";
}

export function validateTerritory(node: Node, correctNode: Node) {
    const guessNode = node.territory?.replace(/\s/g, '') ?? "";
    const correctNodeNoSpace = correctNode?.territory?.replace(/\s/g, '') ?? "";
    if (guessNode === correctNodeNoSpace) {
        return "🟩";
    }
    return "🟥";
}