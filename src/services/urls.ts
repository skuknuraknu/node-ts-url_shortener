import knex from "../config/knex"
export const createShortURL = async (body: {url: string, id?: string}, user_id: number) => {
	const { url, id } = body
	if(!url)
		throw new Error("Url is required")
	if(id){
		const curRecord = await knex("urls").where({ id }).first()
		if(curRecord){
			throw new Error("Id already exists")
		}
	}
	const results = (await knex("urls").insert({ url, id, user_id}, "*"))[0]
	return results
}
export const resolveUrl = async (id: string) => {
	const url = await knex("urls").where("id", id).first()
	if(!url){
		throw new Error("Url not found")
	}
	return url.url
}
export const updateURL = async (id: string, body: {url: string}, user_id: number) => {
	const { url } = body
	if(!url){
		throw new Error("Url is required")
	}
	const current_url = await knex("urls").where("id", id).select("user_id").first()
	if(!current_url){
		throw new Error("Url not found")
	}
	if(current_url.user_id !== user_id){
		throw new Error("You dont have permission")
	}
	const results = await knex("urls").where({ id }).update({url}, "*")
	return results[0]
} 
export const deleteURL = async (id: string, user_id: number) => {
	const current_url = await knex("urls").where("id", id).select("user_id").first()
	if(!current_url){
		throw new Error("Url not found")
	}
	if(current_url.user_id !== user_id){
		throw new Error("You dont have permission")
	}
	await knex("urls").where("id", id).delete()
	return true
}
export const getURLS = async (user_id: number, limit: number, offset: number) => {
	const results = await knex("urls").where({ user_id }).limit(limit || 15).offset(offset || 0)
							.orderBy("created_at", "desc")
	return results
} 