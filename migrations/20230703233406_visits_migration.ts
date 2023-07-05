import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("visits", (table) => {
		table.increments("id")
		table.string("url_id").references("id").inTable("urls").onDelete("CASCADE").notNullable()
		table.string("ip").notNullable()

	})
}


export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("visits")
}

