import React, {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Calendar, MessageSquare, Users, Vote} from 'lucide-react';
import ActivistsMenu from "@/pages/activists/ActivistsMenu";
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";

const TerritorialsGroupPage = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        // e.preventDefault();
        alert(`Thank you for subscribing with email: ${email}`);
        setEmail('');
    };

    return (
        <div>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Territorial Groups</h1>
            <ActivistsMenu/>
            <PrototypeDisclaimer/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Users className="mr-2"/>
                            About Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>We are the local branch of the XX in Rome. Our mission is to promote citizen participation
                            and address local issues.</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Calendar className="mr-2"/>
                            Upcoming Events
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside">
                            <li>Town Hall Meeting - June 15</li>
                            <li>Community Cleanup - June 22</li>
                            <li>Policy Discussion Forum - July 1</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <MessageSquare className="mr-2"/>
                            Local Issues
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside">
                            <li>Public Transportation Improvement</li>
                            <li>Green Spaces Development</li>
                            <li>Small Business Support</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Vote className="mr-2"/>
                            Online Participation
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Join our online platform to participate in local decision-making processes and propose new
                            initiatives.</p>
                        Access Platform
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Stay Informed</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        Subscribe
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default TerritorialsGroupPage;
