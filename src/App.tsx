import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import RightSidebar from '@/components/RightSidebar';
import HomePage from '@/pages/HomePage';
import FactChecksPage from '@/pages/FactChecksPage';
import PoliticiansPage from '@/pages/politicians/PoliticiansPage';
import {Post} from '@/types';
import Community from "@/pages/Community";
import GetInvolvedPage from "@/pages/getInvolved/GetInvolvedPage";
import AboutPage from "@/pages/AboutPage";
import Feed from "@/components/Feed";
import LoginPage from "@/pages/LoginPage";
import TerritorialGroupPage from "@/pages/activists/TerritorialGroupPage";
import ActivistsPage from "@/pages/activists/ActivistsPage";
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
    region: 'YOUR_AWS_REGION',
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'YOUR_IDENTITY_POOL_ID'
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
        await cloudWatchLogs.createLogGroup({ logGroupName }).promise().catch(() => {});

        // Check if the log stream exists, create if it doesn't
        await cloudWatchLogs.createLogStream({ logGroupName, logStreamName }).promise().catch(() => {});

        // Get the sequence token for the log stream
        const { logStreams } = await cloudWatchLogs.describeLogStreams({
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

                    <div className="container mx-auto mt-6 px-4 md:px-0 flex flex-col md:flex-row">
                        <Menu/>
                        <main className="w-full md:w-1/2 md:px-4">
                            <Routes>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/fact-checks" element={<FactChecksPage/>}/>
                                <Route path="/login" element={<LoginPage/>}/>
                                <Route path="/politicians" element={<PoliticiansPage/>}/>
                                <Route path="/community" element={<Community/>}/>
                                <Route path="/activists" element={<ActivistsPage/>}/>
                                <Route path="/open-source" element={<GetInvolvedPage/>}/>
                                <Route path="/about" element={<AboutPage/>}/>
                                <Route path="/newThead" element={<Feed posts={posts}/>}/>
                                <Route path="/groups" element={<TerritorialGroupPage/>}/>
                                <Route path="*" element={<Navigate to="/" replace/>}/>
                            </Routes>
                        </main>
                        <RightSidebar/>
                    </div>
                </div>
            </Router>
        </I18nextProvider>
    );
};

export default App;