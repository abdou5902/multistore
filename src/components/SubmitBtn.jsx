function SubmitBtn({children}) {
	return (
		<button className='bg-blue-500 hover:bg-gray-700 py-2 px-4 rounded' type='submit'>
			{children}
		</button>
	);
}

export default SubmitBtn;
