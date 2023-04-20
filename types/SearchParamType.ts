type Params = {
	id: string
}
type SearchParams = {
	name: string
	price: number
	image: string
	id: string
	quantity: number
	description: string | null
}
export type SearchParamTypes = {
	params: Params
	searchParams: SearchParams
}
