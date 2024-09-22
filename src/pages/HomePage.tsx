import React from 'react';
import GetInvolvedPage from "@/pages/getInvolved/GetInvolvedPage";
import {CloudWatchLogger} from '@/utils/CloudwatchLoggerUtil';
import {config} from "@/config";

const log = new CloudWatchLogger(
    config.cloudWatchRegion,
    config.cloudWatchIdentityPoolId,
    'FacegovReactAppLogs',
    'HomePage'
);

const HomePage: React.FC = () => {
    log.info("Home Page");

    return (<>
        <GetInvolvedPage/>
    </>);
}

export default HomePage;
