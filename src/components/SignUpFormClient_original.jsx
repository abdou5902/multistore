'use client';

import signupAction from "@/_serverAction/signupAction";

function SignupFormClient({ formAtts }) {
	return (
		<div className='w-full max-w-xs mx-auto mt-20'>
			<form action={signupAction} className='bg-white dark:bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
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
                
                <SubmitBtn> Sign Up</SubmitBtn>
			</form>
		</div>
	);
}

export default SignupFormClient;