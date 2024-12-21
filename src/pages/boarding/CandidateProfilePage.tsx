import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Image as ImageIcon } from 'lucide-react';

interface FormData {
    fullName: string;
    party: string;
    currentPosition: string;
    experience: string;
    education: string;
    keyPolicies: string;
    achievements: string;
    campaignWebsite: string;
    email: string;
    phoneNumber: string;
    linkedinProfile: string;
    xProfile: string;
    youtubeChannel: string;
    profileImage: File | null;
}

const CandidateProfilePage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        party: '',
        currentPosition: '',
        experience: '',
        education: '',
        keyPolicies: '',
        achievements: '',
        campaignWebsite: '',
        email: '',
        phoneNumber: '',
        linkedinProfile: '',
        xProfile: '',
        youtubeChannel: '',
        profileImage: null,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError('');
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setError('Image size must be less than 5MB');
                return;
            }

            setFormData(prevState => ({
                ...prevState,
                profileImage: file
            }));

            // Create preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            // Create FormData for multipart/form-data submission
            const submitData = new FormData();

            // Append all text fields
            (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
                if (key !== 'profileImage') {
                    submitData.append(key, formData[key]);
                }
            });

            // Append image if exists
            if (formData.profileImage) {
                submitData.append('profileImage', formData.profileImage);
            }

            const response = await fetch('/api/candidate-profile', {
                method: 'POST',
                body: submitData,
            });

            if (!response.ok) {
                throw new Error('Failed to save candidate profile');
            }

            setSuccess(true);
            setFormData({
                fullName: '',
                party: '',
                currentPosition: '',
                experience: '',
                education: '',
                keyPolicies: '',
                achievements: '',
                campaignWebsite: '',
                email: '',
                phoneNumber: '',
                linkedinProfile: '',
                xProfile: '',
                youtubeChannel: '',
                profileImage: null,
            });
            setImagePreview(null);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Rest of the component remains the same...
    return (
        <div className="container mx-auto py-8">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Candidate Profile Registration</CardTitle>
                </CardHeader>
                <CardContent>
                    {error && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {success && (
                        <Alert className="mb-6">
                            <AlertDescription>Profile successfully saved!</AlertDescription>
                        </Alert>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">Profile Image</label>
                                <div className="flex items-center justify-center w-full">
                                    <div className="w-full max-w-xs">
                                        {imagePreview ? (
                                            <div className="relative w-32 h-32 mx-auto mb-4">
                                                <img
                                                    src={imagePreview}
                                                    alt="Profile preview"
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-32 h-32 mx-auto mb-4 border-2 border-dashed rounded-full flex items-center justify-center bg-gray-50">
                                                <ImageIcon className="w-8 h-8 text-gray-400" />
                                            </div>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Political Party</label>
                                <input
                                    type="text"
                                    name="party"
                                    value={formData.party}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Current Position</label>
                                <input
                                    type="text"
                                    name="currentPosition"
                                    value={formData.currentPosition}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Political Experience</label>
                                <textarea
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 h-32"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Education</label>
                                <textarea
                                    name="education"
                                    value={formData.education}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Key Policy Positions</label>
                                <textarea
                                    name="keyPolicies"
                                    value={formData.keyPolicies}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 h-32"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Notable Achievements</label>
                                <textarea
                                    name="achievements"
                                    value={formData.achievements}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">LinkedIn Profile</label>
                                    <input
                                        type="url"
                                        name="linkedinProfile"
                                        value={formData.linkedinProfile}
                                        onChange={handleInputChange}
                                        placeholder="https://linkedin.com/in/username"
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">X (Twitter) Profile</label>
                                    <input
                                        type="url"
                                        name="xProfile"
                                        value={formData.xProfile}
                                        onChange={handleInputChange}
                                        placeholder="https://x.com/username"
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">YouTube Channel</label>
                                    <input
                                        type="url"
                                        name="youtubeChannel"
                                        value={formData.youtubeChannel}
                                        onChange={handleInputChange}
                                        placeholder="https://youtube.com/@channel"
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Campaign Website</label>
                                <input
                                    type="url"
                                    name="campaignWebsite"
                                    value={formData.campaignWebsite}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin mr-2" />
                                    Saving...
                                </>
                            ) : (
                                'Submit Profile'
                            )}
                        </button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CandidateProfilePage;