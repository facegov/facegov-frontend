import React, {useState} from 'react';
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";
import PoliticiansMenu from "@/pages/politicians/PoliticiansMenu";
import {Search} from 'lucide-react';

const candidatesData = [
    {id: 1, name: 'Jane Doe', party: 'Progressive Party', platform: 'Education reform and environmental protection'},
    {id: 2, name: 'John Smith', party: 'Conservative Party', platform: 'Economic growth and tax cuts'},
    {id: 3, name: 'Alice Johnson', party: 'Centrist Alliance', platform: 'Healthcare reform and social justice'},
];

interface Candidate {
    id: number;
    name: string;
    party: string;
    platform: string;
}

const CandidateCard: React.FC<{ candidate: Candidate }> = ({candidate}) => (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h3 className="text-xl font-bold mb-2">{candidate.name}</h3>
        <p className="text-gray-600 mb-2">Party: {candidate.party}</p>
        <p className="text-gray-700">{candidate.platform}</p>
    </div>
);

const ElectionsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCandidates = candidatesData.filter(candidate =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.party.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.platform.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Upcoming Election Information</h1>
            <PoliticiansMenu/>
            <PrototypeDisclaimer/>

            <p className="text-xl text-gray-700">Get to know the candidates... </p>

            <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-6 relative">
                        <input
                            type="text"
                            placeholder="Search candidates..."
                            className="w-full p-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-3 top-3 text-gray-400" size={20}/>
                    </div>

                    {filteredCandidates.length > 0 ? (
                        filteredCandidates.map(candidate => (
                            <CandidateCard key={candidate.id} candidate={candidate}/>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No candidates found matching your search.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ElectionsPage;