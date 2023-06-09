import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AddCartType } from './types/AddCartType';

type CartItem = {
	name: string,
	id: string,
	image: string,
	description?: string,
	price: number,
	quantity: number | 1
}
type CartState = {
	isOpen: boolean,
	cart:  CartItem[]
	toggleCart: () => void
	addProduct: (item: CartItem) => void
    removeProduct: (item: AddCartType) => void
	
}

export const useDataStore = create<CartState>() (
	persist (
		(set) => ({
			cart: [],
			isOpen: false,
			toggleCart: () => set((state)=>({isOpen: !state.isOpen})),
			addProduct: (item) => set((state) => {
				const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
				if(existingItem){
					const updatedCart = state.cart.map((cartItem) => {
						if(cartItem.id === item.id){
						return {...cartItem, quantity: cartItem.quantity + 1}
					}
						return cartItem;
					})
					return { cart: updatedCart }
				} else {
					return { cart: [...state.cart, { ...item, quantity: 1}]}
				}
			}),
            removeProduct: (item) => set((state) => {
                // Check if item exists and remove quantity - 1
                const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
                if(existingItem && existingItem.quantity! > 1) {
                    const updatedCart = state.cart.map((cartItem) => {
                        if(cartItem.id === item.id){
                            return {...cartItem, quantity: cartItem.quantity! - 1}
                        }
                        return cartItem
                    })
                        return {cart: updatedCart}
                } else {
                    // Remove Item from Cart
                    const filteredCart = state.cart.filter((cartItem) => cartItem.id !== item.id)
                    return {cart: filteredCart}
                }
            })
		}),
		{ name: "cart-store" }
	)
)
