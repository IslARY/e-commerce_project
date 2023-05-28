'use client'
import Image from "next/image"
import { useDataStore } from "@/store"
import formatPrice from "@/util/PriceFormat"
import {IoAddCircle, IoRemoveCircle} from 'react-icons/io5'

export default function Cart(){
	const cartStore = useDataStore()
	return (
		<div onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen left-0 top-0 bg-black/25">
				<section onClick={(e)=>e.stopPropagation()} className="bg-white absolute right-0 top-0 h-screen w-1/4 p-5 overflow-y-scroll text-gray-700">
				<main className="flex flex-col">
					<h1>Your Shopping Cart.</h1>	
					{
						cartStore.cart.map((item) => (						 
							<div className="flex py-4 gap-4">
								<Image src={item.image} alt={item.name} width={120} height={120} />
								<div className="flex flex-col">
									<h2 className="text-sm">{item.name}</h2>
                                    <div className="flex gap-2 ">
                                        {/* Update Quantity of a product  */}
                                        <h2 className="text-sm">Quantity: {item.quantity}</h2>
                                        <button onClick={() => cartStore.removeProduct({ id: item.id, image: item.image, name: item.name, price: item.price, quantity: item.quantity}) }> 
                                            <IoRemoveCircle />
                                        </button>  
                                        <button onClick={() => cartStore.addProduct({ id: item.id, image: item.image, name: item.name, price: item.price, quantity: item.quantity}) }> 
                                                <IoAddCircle />
                                       </button>
                                    </div>    
									<p className="text-sm">{formatPrice(item.price)}</p>
								</div>
							</div>
						)
					)}
					<button className="btn btn-base w-full mt-10 self-center items-center bg-teal-600 border-0 text-lg">Checkout</button>
				</main>
				</section>	
		</div>
	)
}
