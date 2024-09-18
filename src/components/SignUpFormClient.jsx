'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import signupAction from "@/_serverAction/signupAction";

function SignupFormClient({ formAtts }) {
    const [statusMessage, setStatusMessage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatusMessage(null);

        const formData = new FormData(event.target);
        const response = await signupAction(formData);  // Call the server action

        if (response?.success) {
            setStatusMessage('Sign-up successful! Redirecting to login...');
            setTimeout(() => {
                router.push('/login');  // Redirect to login page after 2 seconds
            }, 2000);
        } else {
            setStatusMessage(response?.error || 'Sign-up failed. Please try again.');
        }

        setIsSubmitting(false);
    };


	return (
		<div className='w-full max-w-xs mx-auto mt-20'>
			<form onSubmit={handleSubmit} className='bg-white dark:bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				{formAtts.attributes.map((attribute, index) => (
					<div key={index} className='mb-4'>
						<label htmlFor={attribute.marker} className='block text-gray-600 text-sm font-bold mb-2'>
							{attribute.localizeInfos?.title}
						</label>

						<input
							className='border rounded w-full p-3 text-gray-600'
							id={attribute.marker}
							type={attribute.marker === 'password' ? 'password' : attribute.marker === 'email' ? 'email' : 'text'}
							name={attribute.marker}
							placeholder={attribute.localizeInfos?.title}
							required={attribute.validators?.requiredValidator?.strict}
						/>
					</div>
                ))}
                
                {statusMessage && (
                    <p>{statusMessage}</p>
                )}

                <button
                    className="bg-blue-500 hover:bg-gray-700 py-2 px-4 rounded"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Sign up'}
                </button>
			</form>
		</div>
	);
}

export default SignupFormClient;