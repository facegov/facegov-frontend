// Install required packages:
// npm install amazon-cognito-identity-js @types/amazon-cognito-identity-js

import React from 'react';
import PrototypeDisclaimer from "@/components/PrototypeDisclaimer";
// import React, { useState, FormEvent } from 'react';
// import {
//   CognitoUserPool,
//   CognitoUser,
//   AuthenticationDetails,
//   CognitoUserSession
// } from 'amazon-cognito-identity-js';

// const poolData = {
//   UserPoolId: process.env.REACT_APP_USER_POOL_ID!,
//   ClientId: process.env.REACT_APP_CLIENT_ID!
// };



// const userPool = new CognitoUserPool(poolData);

const LoginPage: React.FC = () => {
  console.log('User Pool ID:', process.env.REACT_APP_USER_POOL_ID);
  console.log('Client ID:', process.env.REACT_APP_CLIENT_ID);

  // const [username, setUsername] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const [message, setMessage] = useState<string>('');
  //
  // const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //
  //   const authenticationDetails = new AuthenticationDetails({
  //     Username: username,
  //     Password: password,
  //   });
  //
  //   const cognitoUser = new CognitoUser({
  //     Username: username,
  //     Pool: userPool
  //   });
  //
  //   cognitoUser.authenticateUser(authenticationDetails, {
  //     onSuccess: (result: CognitoUserSession) => {
  //       const accessToken = result.getAccessToken().getJwtToken();
  //       setMessage('Login successful!');
  //       console.log('Access Token:', accessToken);
  //       // Here you can redirect the user or update app state
  //     },
  //     onFailure: (err: any) => {
  //       setMessage(`Login failed: ${err.message}`);
  //     },
  //   });
  // };

  return (
    <div>
      <PrototypeDisclaimer />

      {/*<form onSubmit={onSubmit}>*/}
      {/*  <input*/}
      {/*    value={username}*/}
      {/*    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}*/}
      {/*    placeholder="Username"*/}
      {/*  />*/}
      {/*  <input*/}
      {/*    value={password}*/}
      {/*    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}*/}
      {/*    placeholder="Password"*/}
      {/*    type="password"*/}
      {/*  />*/}
      {/*  <button type="submit">Login</button>*/}
      {/*</form>*/}
      {/*{message && <p>{message}</p>}*/}
    </div>
  );
};

export default LoginPage;
