import Image from "next/image"
import { SearchParamTypes } from "@/types/SearchParamType"

export default async function ProductInfo({searchParams}: SearchParamTypes) {
	
	return (
		<div className="flex flex-col justify-center items-center gap-y-10 p-12 text-gray-700">
			<Image src={searchParams.image}  alt={searchParams.name} width={400} height={400} className="object-cover"/>
			<section className="">
				<h1 className=""> <span className="text-slate-500 font-semibold">Name</span> : {searchParams.name}</h1>
				<p className=""><span className="text-slate-500 font-semibold">Description </span>: {searchParams.description !== null ? searchParams.description : "Not Available."}</p>
			</section>
		</div>
	)
}