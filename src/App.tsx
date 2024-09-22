import React, {useState} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Header from '@/components/Header';
import HomePage from '@/pages/HomePage';
import FactChecksPage from '@/pages/factChecks/FactChecksPage';
import PoliticiansPage from '@/pages/politicians/PoliticiansPage';
import {Post} from '@/types';
import CommunityPage from "@/pages/community/CommunityPage";
import GetInvolvedPage from "@/pages/getInvolved/GetInvolvedPage";
import AboutPage from "@/pages/AboutPage";
import Feed from "@/components/Feed";
import LoginPage from "@/pages/LoginPage";
import TerritorialGroupPage from "@/pages/activists/TerritorialGroupPage";
import ActivistsPage from "@/pages/activists/ActivistsPage";
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import AWS from 'aws-sdk';
import {config} from "@/config";
import ElectionsPage from "@/pages/politicians/ElectionsPage";
import ParliamentPage from "@/pages/politicians/ParliamentPage";
import ProgressPage from "@/pages/factChecks/ProgressPage";
import MiscommunicationPage from "@/pages/factChecks/MiscommunicationPage";
import ProposalsPage from "@/pages/activists/ProposalsPage";
import FeaturedDiscussionPage from "@/pages/community/FeaturedDiscussionsPage";
import TrendingTopicsPage from "@/pages/community/TrendingTopicsPage";

// Configure AWS SDK
AWS.config.update({
    region: config.cloudWatchRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: config.cloudWatchIdentityPoolId
    })
});

// Create CloudWatch Logs client
const cloudWatchLogs = new AWS.CloudWatchLogs();

// Logging function
const log = async (message: string, logGroupName: string, logStreamName: string): Promise<void> => {
    const params: AWS.CloudWatchLogs.PutLogEventsRequest = {
        logGroupName,
        logStreamName,
        logEvents: [
            {
                message,
                timestamp: new Date().getTime()
            }
        ]
    };

    try {
        // Check if the log group exists, create if it doesn't
        await cloudWatchLogs.createLogGroup({logGroupName}).promise().catch(() => {
        });

        // Check if the log stream exists, create if it doesn't
        await cloudWatchLogs.createLogStream({logGroupName, logStreamName}).promise().catch(() => {
        });

        // Get the sequence token for the log stream
        const {logStreams} = await cloudWatchLogs.describeLogStreams({
            logGroupName,
            logStreamNamePrefix: logStreamName
        }).promise();

        if (logStreams && logStreams.length > 0 && logStreams[0].uploadSequenceToken) {
            params.sequenceToken = logStreams[0].uploadSequenceToken;
        }

        // Put log events
        await cloudWatchLogs.putLogEvents(params).promise();
        console.log('Log sent to CloudWatch');
    } catch (error) {
        console.error('Error sending log to CloudWatch:', error);
    }
};

const App: React.FC = () => {


    log('Button clicked', 'MyReactAppLogs', 'UserInteractionLogs');


    const [posts] = useState<Post[]>([
        {
            id: 1,
            author: 'Jane Doe',
            content: 'Just fact-checked the latest statement from Senator Smith. Here\'s what I found...',
            likes: 245,
            comments: 89
        },
        {
            id: 2,
            author: 'John Public',
            content: 'Comparing campaign promises to actual policy implementations. The results are surprising!',
            likes: 189,
            comments: 56
        },
    ]);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    return (
        <I18nextProvider i18n={i18n}>

            <Router>
                <div className="min-h-screen bg-gray-100">
                    <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>

                    <div className="container mx-auto mt-6 px-4 md:px-0">

                        <main className="w-full">
                            <Routes>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/fact-checks" element={<FactChecksPage/>}/>
                                <Route path="/miscommunication" element={<MiscommunicationPage/>}/>
                                <Route path="/progress" element={<ProgressPage/>}/>
                                <Route path="/login" element={<LoginPage/>}/>
                                <Route path="/politicians" element={<PoliticiansPage/>}/>
                                <Route path="/elections" element={<ElectionsPage/>}/>
                                <Route path="/parliament" element={<ParliamentPage/>}/>
                                <Route path="/community" element={<CommunityPage/>}/>
                                <Route path="/faatured-discussions" element={<FeaturedDiscussionPage/>}/>
                                <Route path="/trending-topics" element={<TrendingTopicsPage/>}/>
                                <Route path="/activists" element={<ActivistsPage/>}/>
                                <Route path="/open-source" element={<GetInvolvedPage/>}/>
                                <Route path="/about" element={<AboutPage/>}/>
                                <Route path="/newThead" element={<Feed posts={posts}/>}/>
                                <Route path="/groups" element={<TerritorialGroupPage/>}/>
                                <Route path="/proposals" element={<ProposalsPage/>}/>
                                <Route path="*" element={<Navigate to="/" replace/>}/>
                            </Routes>
                        </main>

                    </div>
                </div>
            </Router>
        </I18nextProvider>
    );
};

export default App;