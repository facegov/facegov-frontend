import React, {useState} from 'react';
import {Search} from 'lucide-react';
import PoliticalProgressChart from "@/components/PoliticalProgressChart";
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";
import FactChecksMenu from "@/pages/factChecks/FactChecksMenu";

interface FactCheck {
    id: number;
    politician: string;
    claim: string;
    reality: string;
    verdict: 'True' | 'Mostly True' | 'Half True' | 'Mostly False' | 'False';
}

const factChecks: FactCheck[] = [
    {
        id: 1,
        politician: "Jane Doe",
        claim: "We've created 1 million new jobs in the last year.",
        reality: "Official statistics show 800,000 new jobs were created.",
        verdict: "Mostly True"
    },
    {
        id: 2,
        politician: "John Smith",
        claim: "Crime rates have decreased by 50% under my administration.",
        reality: "Crime rates have decreased by 20% according to FBI data.",
        verdict: "False"
    },
    {
        id: 3,
        politician: "Alice Johnson",
        claim: "Our education budget has doubled since I took office.",
        reality: "The education budget has increased by 75% since the politician took office.",
        verdict: "Mostly False"
    },
    {
        id: 4,
        politician: "Bob Williams",
        claim: "We've reduced carbon emissions by 30% in our state.",
        reality: "Environmental Protection Agency data shows a 28% reduction in carbon emissions.",
        verdict: "Mostly True"
    },
    {
        id: 5,
        politician: "Emma Brown",
        claim: "Our healthcare program covers 100% of citizens.",
        reality: "Recent census data indicates 97% of citizens are covered by the healthcare program.",
        verdict: "Mostly True"
    }
];

const VerdictBadge: React.FC<{ verdict: FactCheck['verdict'] }> = ({verdict}) => {
    const colorClass = {
        'True': 'bg-green-100 text-green-800',
        'Mostly True': 'bg-lime-100 text-lime-800',
        'Half True': 'bg-yellow-100 text-yellow-800',
        'Mostly False': 'bg-orange-100 text-orange-800',
        'False': 'bg-red-100 text-red-800'
    }[verdict];

    return (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
      {verdict}
    </span>
    );
};

const FactCheckItem: React.FC<{ factCheck: FactCheck }> = ({factCheck}) => (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold">{factCheck.politician}</h3>
            <VerdictBadge verdict={factCheck.verdict}/>
        </div>
        <p className="font-medium mb-2">Claim: "{factCheck.claim}"</p>
        <p className="text-gray-600 mb-2">Reality: {factCheck.reality}</p>
    </div>
);

const ProgressPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');


    const filteredFactChecks = factChecks.filter(
        check =>
            check.politician.toLowerCase().includes(searchTerm.toLowerCase()) ||
            check.claim.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Fact Checks</h1>
            <FactChecksMenu/>
            <PrototypeDisclaimer/>
            <PoliticalProgressChart/>
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Search by politician or claim..."
                    className="w-full p-2 pl-10 border rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20}/>
            </div>
            {filteredFactChecks.map(factCheck => (
                <FactCheckItem key={factCheck.id} factCheck={factCheck}/>
            ))}
        </div>
    );
};

export default ProgressPage;