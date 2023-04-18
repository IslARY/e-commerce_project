'use client'
import Image from "next/image"
import { useDataStore } from "@/store"

export default function Cart(){
	const cartStore = useDataStore()
	return (
		<div>
			<h1>Cart</h1>
		</div>
	)
}