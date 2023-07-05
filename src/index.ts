import knex, { onDatabaseConnect } from "./config/knex"
import { createShortURL } from "./services/urls"

const main = async () => {
	await onDatabaseConnect()
	const results = await createShortURL({url: 'tes.com', id: 'first_id'}, 1)
	console.log(results)

}

main()