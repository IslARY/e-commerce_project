import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import { ProductType } from "@/types/ProductType"

export default function Product({image, name, price}: ProductType) {
	return(
	<main className="border-black border-2 p-2">
		<Image src={image} alt={name} height={200} width={200} />
		<h1>{name}</h1>
		<h2>{price !== null ? formatPrice(price) : 'N/A'}</h2>
	</main>
	)	
}