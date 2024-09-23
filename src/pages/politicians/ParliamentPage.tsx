import React, {useState} from 'react';
import ForceGraph2D, {LinkObject, NodeObject} from 'react-force-graph-2d';
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";
import PoliticiansMenu from "@/pages/politicians/PoliticiansMenu";

interface MP {
    id: string;
    name: string;
    party: string;
    x?: number;
    y?: number;
}

interface MPLink extends LinkObject {
    source: string;
    target: string;
}

// Mock data for UK MPs
const mpData = {
    nodes: [
        {id: "1", name: "John Smith", party: "Conservative"},
        {id: "2", name: "Emma Johnson", party: "Labour"},
        {id: "3", name: "David Williams", party: "Liberal Democrats"},
        {id: "4", name: "Sarah Brown", party: "Scottish National Party"},
        {id: "5", name: "Michael Davis", party: "Green"},
        // Add more MPs here...
    ] as MP[],
    links: [
        {source: "1", target: "2"},
        {source: "2", target: "3"},
        {source: "3", target: "4"},
        {source: "4", target: "5"},
        {source: "5", target: "1"},
        // Add more links to represent relationships or committees
    ] as MPLink[]
};

const partyColors: { [key: string]: string } = {
    "Conservative": "#0087DC",
    "Labour": "#DC241f",
    "Liberal Democrats": "#FDBB30",
    "Scottish National Party": "#FDF38E",
    "Green": "#6AB023",
    "Other": "#808080"
};

const ParliamentPage: React.FC = () => {
    const [highlightLinks, setHighlightLinks] = useState<Set<MPLink>>(new Set());
    const [hoverNode, setHoverNode] = useState<MP | null>(null);

    const updateHighlight = () => {
        setHighlightLinks(new Set(hoverNode ? mpData.links.filter(link => link.source === hoverNode.id || link.target === hoverNode.id) : []));
    };

    const handleNodeHover = (node: MP | null) => {
        setHoverNode(node);
        updateHighlight();
    };

    const handleLinkHover = (link: MPLink | null) => {
        setHighlightLinks(new Set(link ? [link] : []));
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Members of Parliament</h1>
            <PoliticiansMenu/>
            <PrototypeDisclaimer/>
            <p className="text-xl text-gray-700">Get to know your MPs....</p>
            <ForceGraph2D
                graphData={mpData}
                nodeLabel="name"
                nodeColor={(node: NodeObject) => partyColors[(node as MP).party] || partyColors["Other"]}
                nodeRelSize={6}
                linkWidth={(link: LinkObject) => highlightLinks.has(link as MPLink) ? 2 : 1}
                linkDirectionalParticles={4}
                linkDirectionalParticleWidth={(link: LinkObject) => highlightLinks.has(link as MPLink) ? 2 : 0}
                onNodeHover={handleNodeHover}
                onLinkHover={handleLinkHover}
                nodeCanvasObjectMode={() => 'after'}
                nodeCanvasObject={(node: NodeObject, ctx: CanvasRenderingContext2D, globalScale: number) => {
                    const label = (node as MP).name;
                    const fontSize = 12 / globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                    ctx.fillText(label, node.x || 0, (node.y || 0) + 8);
                }}
            />
        </div>
    );
};

export default ParliamentPage;