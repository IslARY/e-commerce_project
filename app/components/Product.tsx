import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import { ProductType } from "@/types/ProductType"

export default function Product({image, name, price}: ProductType) {
	return(
	<main className="border-slate-200 border-2 p-2 flex flex-col rounded-md text-gray-600">
		<Image src={image} alt={name} height={800} width={800} className="w-40 h-40 place-self-center object-cover" />
		<section className="font-medium py-2">
			<h1>{name}</h1>
			<h2 className="text-sm text-gray-500">{price !== null ? formatPrice(price) : 'N/A'}</h2>
		</section>
	</main>
	)	
}