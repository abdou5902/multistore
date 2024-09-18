// store/cartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
	cartItems: [],
	addToCart: (product) =>
		set((state) => ({
			cartItems: [...state.cartItems, product],
		})),
	getCartItemCount: () => set((state) => state.cartItems.length),
}));

export default useCartStore;