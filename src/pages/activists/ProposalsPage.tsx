import React, {useState} from 'react';
import {Globe, PlusCircle, ThumbsDown, ThumbsUp} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Select2, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select2';
import {Badge} from '@/components/ui/badge';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import ActivistsMenu from "@/pages/activists/ActivistsMenu";
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";

interface Regulation {
    id: number;
    country: string;
    category: string;
    text: string;
}

interface Proposal {
    id: number;
    text: string;
    category: string;
    votes: number;
    score: number;
    similarRegulations: (Regulation & { similarity: number })[];
}

const categories = ['Economy', 'Healthcare', 'Education', 'Environment', 'Infrastructure', 'Other'];

const globalRegulations: Regulation[] = [
    {id: 1, country: 'USA', category: 'Healthcare', text: 'Universal healthcare coverage'},
    {id: 2, country: 'Germany', category: 'Education', text: 'Free university education'},
    {id: 3, country: 'Japan', category: 'Environment', text: 'Mandatory recycling program'},
    {id: 4, country: 'Sweden', category: 'Economy', text: 'Progressive tax system'},
    {id: 5, country: 'Singapore', category: 'Infrastructure', text: 'Smart city initiative'},
];

const LegislativeProposalsApp: React.FC = () => {
    const [proposals, setProposals] = useState<Proposal[]>([]);
    const [newProposal, setNewProposal] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const compareProposal = (proposalText: string, category: string) => {
        const relevantRegulations = globalRegulations.filter(reg => reg.category === category);
        const similarities = relevantRegulations.map(reg => ({
            ...reg,
            similarity: calculateSimilarity(proposalText, reg.text)
        }));
        return similarities.sort((a, b) => b.similarity - a.similarity).slice(0, 3);
    };

    const calculateSimilarity = (text1: string, text2: string): number => {
        const words1 = text1.toLowerCase().split(' ');
        const words2 = text2.toLowerCase().split(' ');
        const commonWords = words1.filter(word => words2.includes(word));
        return (commonWords.length / Math.max(words1.length, words2.length)) * 100;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newProposal.trim() && selectedCategory) {
            const similarRegulations = compareProposal(newProposal, selectedCategory);
            const score = similarRegulations.length > 0
                ? Math.max(...similarRegulations.map(reg => reg.similarity))
                : 0;

            setProposals([...proposals, {
                id: Date.now(),
                text: newProposal,
                category: selectedCategory,
                votes: 0,
                score,
                similarRegulations
            }]);
            setNewProposal('');
            setSelectedCategory('');
        }
    };

    const handleVote = (id: number, increment: number) => {
        setProposals(proposals.map(proposal =>
            proposal.id === id ? {...proposal, votes: proposal.votes + increment} : proposal
        ));
    };

    return (
        <div className="max-w-4xl mx-auto p-4">

            <h1 className="text-3xl font-bold mb-6">Legislative Proposals</h1>
            <ActivistsMenu/>
            <PrototypeDisclaimer/>
            <form onSubmit={handleSubmit} className="mb-8 space-y-4">
                <div className="flex gap-2">
                    <Input
                        type="text"
                        value={newProposal}
                        onChange={(e) => setNewProposal(e.target.value)}
                        placeholder="Enter your legislative proposal"
                        className="flex-grow"
                    />
                    <Select2 value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select category"/>
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map(category => (
                                <SelectItem key={category} value={category}>{category}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select2>
                </div>

                <PlusCircle className="mr-2 h-4 w-4"/> Add Proposal

            </form>

            <div className="space-y-4">
                {proposals.map(proposal => (
                    <Card key={proposal.id}>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle>{proposal.text}</CardTitle>
                                <Badge>{proposal.category}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-center mb-4">Votes: {proposal.votes}</p>
                            <p className="text-xl font-semibold text-center">Similarity
                                Score: {proposal.score.toFixed(2)}%</p>
                            {proposal.similarRegulations.length > 0 && (
                                <Alert className="mt-4">
                                    <Globe className="h-4 w-4"/>
                                    <AlertTitle>Similar Global Regulations</AlertTitle>
                                    <AlertDescription>
                                        <ul className="list-disc pl-5">
                                            {proposal.similarRegulations.map(reg => (
                                                <li key={reg.id}>
                                                    {reg.country}: {reg.text} (Similarity: {reg.similarity.toFixed(2)}%)
                                                </li>
                                            ))}
                                        </ul>
                                    </AlertDescription>
                                </Alert>
                            )}
                        </CardContent>
                        <CardFooter className="justify-end space-x-2">
                            <Button onClick={() => handleVote(proposal.id, 1)}>
                                <ThumbsUp className="mr-2 h-4 w-4"/> Upvote
                            </Button>
                            <Button onClick={() => handleVote(proposal.id, -1)}>
                                <ThumbsDown className="mr-2 h-4 w-4"/> Downvote
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default LegislativeProposalsApp;