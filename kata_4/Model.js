import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    user: 'nexus',
    host: 'localhost',
    database: 'dump_yoogy',
    password: '',
    port: 5432
});
export class Model {
    constructor() { }
    // constructor(client:void){
    //     this.client = await pool.connect();
    // }
    // async test(){
    //     try {
    //     //   const client = await pool.connect();
    //       const result = await client.query('select * from categories;');
    //       const data = result.rows;
    //       client.release();
    //       return data;
    //     } catch (error) {
    //       console.error(error);
    //     }
    // }
    async getAllCategories() {
        try {
            const client = await pool.connect();
            const result = await client.query('select * from categories;');
            const data = result.rows;
            client.release();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
    async getFavorite() {
        try {
            const client = await pool.connect();
            const result = await client.query('select * from favoris;');
            const data = result.rows;
            client.release();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
    async getRecipeRestriction() {
        try {
            const client = await pool.connect();
            const result = await client.query('select * from recette_restriction;');
            const data = result.rows;
            client.release();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
    async getAllRecipe() {
        try {
            const client = await pool.connect();
            const result = await client.query('select * from recettes;');
            const data = result.rows;
            client.release();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
    async getDietaryRestriction() {
        try {
            const client = await pool.connect();
            const result = await client.query('select * from recettes;');
            const data = result.rows;
            client.release();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
    async getUsers() {
        try {
            const client = await pool.connect();
            const result = await client.query('select * from users;');
            const data = result.rows;
            client.release();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
}
//   const testConnection = async () => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT NOW()');
//     console.log('Conexión exitosa a PostgreSQL. Hora del servidor:', result.rows[0].now);
//     client.release();
//   } catch (err) {
//     console.error('Error al conectar a PostgreSQL:', err);
//   } finally {
//     pool.end();
//   }
// }
// testConnection();
