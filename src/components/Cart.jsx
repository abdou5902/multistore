'use client';

// components/Cart.jsx
import useCartStore from '@/store/cartStore';

function Cart() {
	const cartItems = useCartStore((state) => state.cartItems);

	return (
		<div>
			<h2>Your Cart</h2>
			<hr className='my-3' />
			{cartItems.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				<ul>
					{cartItems.map((item, index) => (
						<>
							<li key={index}>
								{item.localizeInfos.title} - {item.attributeValues.price.value} $
							</li>
							<hr className='my-3' />
						</>
					))}
				</ul>
			)}
		</div>
	);
}

export default Cart;
