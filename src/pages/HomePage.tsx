import React from 'react';
import GetInvolvedPage from "@/pages/getInvolved/GetInvolvedPage";
import { CloudWatchLogger } from '@/utils/CloudwatchLoggerUtil';

const log = new CloudWatchLogger(
    'YOUR_AWS_REGION',
    'YOUR_IDENTITY_POOL_ID',
    'MyReactAppLogs',
    'AppLogs'
);

const HomePage: React.FC = () => {

    log.info("Home Page")

    return(<>
        <GetInvolvedPage />
    </>);
}

export default HomePage;
