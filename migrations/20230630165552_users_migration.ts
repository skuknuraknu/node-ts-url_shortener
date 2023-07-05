import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('users', (t) => {
		t.increments("id")
		t.string("username").notNullable().unique()
		t.text("password").notNullable()
		t.timestamps(true, true)
	})
}


export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable('users')
}

