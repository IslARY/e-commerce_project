'use client'

import { useDataStore } from "@/store" ;
import { AddCartType } from "@/types/AddCartType";
import { useState } from "react";

export default function AddCart({name, id, image, price, quantity}: AddCartType) {
	const cartStore = useDataStore();
	const [added, setAdded] = useState(false);
	const addToCardHandler = () => {
		cartStore.addProduct({id, name, image, price, quantity})
	}
	return (
		<>
			<button onClick={addToCardHandler} className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700 btn btn-sm w-[20rem] self-center place-items-center">Add to cart</button>
		</>
	)
}