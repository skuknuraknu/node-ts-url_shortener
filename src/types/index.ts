export interface User {
	id: number
	username: string
	password: string
	created_at: Date
	updated_at:Date
}
export interface Urls {
	id:string
	url: string
	user_id: number
	created_at: Date
	updated_at:Date
}
export interface Visits {
	id: number
	url_id: number
	ip: string
}
declare module "knex/types/tables" {
	interface Tables {
		users: User
		urls: Urls
		visits: Visits
	}
}