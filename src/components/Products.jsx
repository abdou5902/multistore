import { getApi } from '@/_oneEntry';
import AddToCartBtn from './AddToCartBtn';

async function ProductsCategoryPage({ page }) {
	const api = await getApi();
	const products = await api.Products.getProductsByPageUrl(page.pageUrl);

	return (
		<div className='grid grid-cols-2 md:grid-cols-3 justify-between gap-10'>
			{products?.map((product, index) => (
				<div key={index} className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
					<img className='w-full max-h-96 rounded-lg p-3' src={product.attributeValues?.image?.value.downloadLink} alt={product.localizeInfos.title} />
					<div className='p-5'>
						<a href={`/product/${product.id}`}>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{product.localizeInfos.title}</h5>
						</a>
						<p className='mb-3 min-h-32 font-normal text-gray-700 dark:text-gray-400'>{product.attributeValues.description.value.htmlValue.replace('<p>', '').replace('</p>', '')}</p>
						<span className='inline-block bg-yellow-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2'>{product.attributeValues.price.value} $</span>
						<AddToCartBtn product={product} />
					</div>
				</div>
			))}
		</div>
	);
}

export default ProductsCategoryPage;
