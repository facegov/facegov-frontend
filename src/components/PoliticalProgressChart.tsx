import React, {useState} from 'react';
import {Bar, BarChart, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,} from 'recharts';
import {AlertCircle} from 'lucide-react';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';

interface DataPoint {
    category: string;
    delivered: number;
    additional: number;
    details: string;
}

const data: DataPoint[] = [
    {
        category: 'Economy',
        delivered: 75,
        additional: 15,
        details: "Implemented tax reforms and job creation programs. Additional focus on small business support."
    },
    {
        category: 'Healthcare',
        delivered: 60,
        additional: 10,
        details: "Expanded healthcare coverage and improved hospital infrastructure. Introduced new mental health initiatives."
    },
    {
        category: 'Education',
        delivered: 80,
        additional: 5,
        details: "Increased education funding and modernized curriculum. Launched new scholarship programs."
    },
    {
        category: 'Environment',
        delivered: 45,
        additional: 20,
        details: "Implemented some green energy initiatives. Introduced additional legislation on carbon emissions and plastic reduction."
    },
    {
        category: 'Infrastructure',
        delivered: 70,
        additional: 8,
        details: "Improved road networks and public transportation. Additional focus on rural connectivity."
    },
];

const PoliticalProgressChart: React.FC = () => {
    const [selectedBar, setSelectedBar] = useState<DataPoint | null>(null);

    const handleBarClick = (entry: DataPoint) => {
        setSelectedBar(entry);
    };

    return (
        <div className="w-full p-4">
            <h2 className="text-xl font-bold mb-4">Political Party Progress</h2>
            <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{top: 20, right: 30, left: 20, bottom: 5}}
                        onClick={(e) => e && e.activePayload && handleBarClick(e.activePayload[0].payload)}
                    >
                        <XAxis dataKey="category"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="delivered" name="Delivered Program" fill="#8884d8">
                            {data.map((entry, index) => (
                                <Cell
                                    cursor="pointer"
                                    fill={selectedBar && selectedBar.category === entry.category ? '#6a5acd' : '#8884d8'}
                                    key={`cell-${index}`}
                                />
                            ))}
                        </Bar>
                        <Bar dataKey="additional" name="Additional Laws" fill="#82ca9d">
                            {data.map((entry, index) => (
                                <Cell
                                    cursor="pointer"
                                    fill={selectedBar && selectedBar.category === entry.category ? '#3cb371' : '#82ca9d'}
                                    key={`cell-${index}`}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            {selectedBar && (
                <Alert className="mt-4">
                    <AlertCircle className="h-4 w-4"/>
                    <AlertTitle>{selectedBar.category}</AlertTitle>
                    <AlertDescription>
                        <p>Delivered: {selectedBar.delivered}%</p>
                        <p>Additional: {selectedBar.additional}%</p>
                        <p>{selectedBar.details}</p>
                    </AlertDescription>
                </Alert>
            )}
        </div>
    );
};

export default PoliticalProgressChart;