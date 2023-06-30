import { onDatabaseConnect } from "./config/knex"
onDatabaseConnect()
	.then(() => console.log("DB Connected"))
	.catch(() => console.log("Error"))