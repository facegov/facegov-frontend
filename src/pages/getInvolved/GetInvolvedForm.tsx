import React, { ChangeEvent, useState } from 'react';
import axios from "axios";
import { config } from '@/config';
import LoadingButton from '@/components/LoadingButton'; // Import the new LoadingButton component

interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

const GetInvolvedForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setIsLoading(true);

    try {
      const url = config.userRegistrationUrl;
      const response = await axios.post<RegistrationData>(url, {
        username,
        email,
        password: 'N/A'  // Setting default password
      });
      console.log(`facegov UI. response from ${url} is`, response.data);

      setSuccess(true);
      setUsername('');
      setEmail('');
    } catch (err) {
      console.error('facegov UI. Registration error:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
    }
  };

  return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
                id="username"
                type="text"
                value={username}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
            />
          </div>
          <LoadingButton
              type="submit"
              isLoading={isLoading}
              loadingText="Registering..."
          >
            Join FaceGov Now
          </LoadingButton>
        </form>
        <p className="mt-4 text-lg">
          Let's rewrite the rules of politics, one empowered citizen at a time!
        </p>
          {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                <strong>Error:</strong> {error}
              </div>
          )}
        {success && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
              <strong>Success:</strong> Your request has been submitted!
            </div>
        )}
      </div>
  );
};

export default GetInvolvedForm;