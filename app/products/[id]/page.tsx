import Image from "next/image"
import { SearchParamTypes } from "@/types/SearchParamType"
import formatPrice from "@/util/PriceFormat"

export default async function ProductInfo({searchParams}: SearchParamTypes) {
	
	return (
		<div className="flex justify-center items-center gap-x-20 gap-y-10 p-12 text-gray-700 mt-10">
			<Image src={searchParams.image}  alt={searchParams.name} width={400} height={400} className="object-cover"/>
			<section className="flex flex-col gap-1">
				<h1 className=" text-black"><span className="font-bold text-2xl mb-5">{searchParams.name}</span></h1>
				<p className=""><span className="text-slate-500 font-semibold">Description </span>: {searchParams.description !== null ? searchParams.description : "Not Available."}</p>
				<h2 className="text-teal-700 font-bold"><span className="text-slate-500 font-semibold">Price </span>: {searchParams.price ? formatPrice(searchParams.price) : "N/A"}</h2>
				<button className="btn btn-accent w-fit text-white mt-5 place-self-center">Add to Cart</button>
			</section>
			
		</div>
	)
}