interface Config {
    userRegistrationUrl: string;
    cloudWatchRegion: string;
    cloudWatchIdentityPoolId: string;
    maxItems: number;
}

export const config: Config = {
    userRegistrationUrl: process.env.REACT_APP_AWS_APIGATEWAY_USER_REGISTRATION_URL || '',
    cloudWatchRegion: process.env.REACT_APP_AWS_CLOUDWATCH_REGION || '',
    cloudWatchIdentityPoolId: process.env.REACT_APP_AWS_CLOUDWATCH_IDENTITY_POOL_ID || '',
    maxItems: Number(process.env.REACT_APP_MAX_ITEMS) || 10,
};