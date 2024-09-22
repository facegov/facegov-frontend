// CloudWatchLogger.ts

import AWS from 'aws-sdk';

export class CloudWatchLogger {
    private cloudWatchLogs: AWS.CloudWatchLogs;
    private logGroupName: string;
    private logStreamName: string;

    constructor(region: string, identityPoolId: string, logGroupName: string, logStreamName: string) {
        AWS.config.update({
            region: region,
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: identityPoolId
            })
        });

        this.cloudWatchLogs = new AWS.CloudWatchLogs();
        this.logGroupName = logGroupName;
        this.logStreamName = logStreamName;
    }

    public async log(message: string, logLevel: 'INFO' | 'WARN' | 'ERROR' = 'INFO'): Promise<void> {
        await this.ensureLogGroupAndStream();

        const params: AWS.CloudWatchLogs.PutLogEventsRequest = {
            logGroupName: this.logGroupName,
            logStreamName: this.logStreamName,
            logEvents: [
                {
                    message: `[${logLevel}] ${message}`,
                    timestamp: new Date().getTime()
                }
            ]
        };

        const sequenceToken = await this.getSequenceToken();
        if (sequenceToken) {
            params.sequenceToken = sequenceToken;
        }

        try {
            await this.cloudWatchLogs.putLogEvents(params).promise();
            console.log('Log sent to CloudWatch');
        } catch (error) {
            console.error('Error sending log to CloudWatch:', error);
        }
    }

    public async info(message: string): Promise<void> {
        return this.log(message, 'INFO');
    }

    public async warn(message: string): Promise<void> {
        return this.log(message, 'WARN');
    }

    public async error(message: string): Promise<void> {
        return this.log(message, 'ERROR');
    }

    private async ensureLogGroupAndStream(): Promise<void> {
        try {
            // Check if the log group exists, create if it doesn't
            await this.cloudWatchLogs.createLogGroup({logGroupName: this.logGroupName}).promise().catch(() => {
            });

            // Check if the log stream exists, create if it doesn't
            await this.cloudWatchLogs.createLogStream({
                logGroupName: this.logGroupName,
                logStreamName: this.logStreamName
            }).promise().catch(() => {
            });
        } catch (error) {
            console.error('Error ensuring log group and stream:', error);
        }
    }

    private async getSequenceToken(): Promise<string | undefined> {
        try {
            const {logStreams} = await this.cloudWatchLogs.describeLogStreams({
                logGroupName: this.logGroupName,
                logStreamNamePrefix: this.logStreamName
            }).promise();

            if (logStreams && logStreams.length > 0 && logStreams[0].uploadSequenceToken) {
                return logStreams[0].uploadSequenceToken;
            }
        } catch (error) {
            console.error('Error getting sequence token:', error);
        }
        return undefined;
    }
}

// Usage example:
// import { CloudWatchLogger } from './CloudWatchLogger';
// 
// const logger = new CloudWatchLogger(
//   'YOUR_AWS_REGION',
//   'YOUR_IDENTITY_POOL_ID',
//   'MyReactAppLogs',
//   'AppLogs'
// );
// 
// logger.info('Application started');
// logger.warn('Resource usage high');
// logger.error('An error occurred');
