import { getApi } from '@/_oneEntry';
import AddToCartBtn from '@/components/AddToCartBtn';

async function page({ params: { id } }) {
	const api = await getApi();
	const product = await api.Products.getProductById(id);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			
			<div class='max-w-6xl mx-auto'>
				<div class='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8'>
					<h1 class='text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>{product.localizeInfos.title}</span>
					</h1>
					<p class='text-lg font-normal text-gray-500 dark:text-gray-400 mb-6'>{product.attributeValues.description.value.htmlValue.replace('<p>', '').replace('</p>', '')}</p>
					<AddToCartBtn product={product}/>
				</div>
			</div>

			<div className='bg-gray-100 dark:bg-gray-800 py-8 rounded-lg'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col md:flex-row -mx-4'>
						<div className='md:flex-1 px-4'>
							<div className='h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4'>
								<img className='w-full h-full object-cover' src={product.attributeValues?.image?.value.downloadLink} alt='Product Image' />
							</div>
							<div className='flex -mx-2 mb-4'>
								<div className='w-1/2 px-2'>
									<button className='w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700'>Add to Cart</button>
								</div>
							</div>
						</div>
						<div className='md:flex-1 px-4'>
							<h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-2'>
								<span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>{product.localizeInfos.title}</span>
							</h2>
							<p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>{product.attributeValues.description.value.htmlValue.replace('<p>', '').replace('</p>', '')}</p>
							<div className='flex mb-4'>
								<div className='mr-4'>
									<span className='font-bold text-gray-700 dark:text-gray-300'>Price:</span>
									<span className='text-gray-600 dark:text-gray-300'>{product.attributeValues.price.value} $</span>
								</div>
								<div>
									<span className='font-bold text-gray-700 dark:text-gray-300'>Availability:</span>
									<span className='text-gray-600 dark:text-gray-300'>In Stock</span>
								</div>
							</div>
							<div className='mb-4'>
								<span className='font-bold text-gray-700 dark:text-gray-300'>Select Color:</span>
								<div className='flex items-center mt-2'>
									<button className='w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2' />
									<button className='w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2' />
									<button className='w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2' />
									<button className='w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2' />
								</div>
							</div>
							<div className='mb-4'>
								<span className='font-bold text-gray-700 dark:text-gray-300'>Select Size:</span>
								<div className='flex items-center mt-2'>
									<button className='bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600'>
										S
									</button>
									<button className='bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600'>
										M
									</button>
									<button className='bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600'>
										L
									</button>
									<button className='bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600'>
										XL
									</button>
									<button className='bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600'>
										XXL
									</button>
								</div>
							</div>
							<div>
								<span className='font-bold text-gray-700 dark:text-gray-300'>Product Description:</span>
								<p className='text-gray-600 dark:text-gray-300 text-sm mt-2'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem
									rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed
									ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default page;