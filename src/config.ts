interface Config {
    userRegistrationUrl: string;
    maxItems: number;
}

export const config: Config = {
    userRegistrationUrl: process.env.AWS_APIGATEWAY_USER_REGISTRATION_URL || '',
    maxItems: Number(process.env.REACT_APP_MAX_ITEMS) || 10,
};