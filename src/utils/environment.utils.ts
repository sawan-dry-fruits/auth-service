export const MYSQL_PORT = Number(process.env.MYSQL_PORT);
console.log(MYSQL_PORT);
export const MYSQL_USER = process.env.MYSQL_USER || 'root';
export const MYSQL_USER_PASS = process.env.MYSQL_USER_PASS || 'password';
export const MYSQL_DB_NAME = process.env.MYSQL_DB_NAME;
export const MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD;
export const HOST = process.env.HOST;
