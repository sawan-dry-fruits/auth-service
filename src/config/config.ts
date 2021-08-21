import { User } from 'src/user/user.entity';
console.log(process.env.HOST);
export const config = () => ({
  database: {
    type: 'mysql',
    host: process.env.HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_USER_PASS,
    database: process.env.MYSQL_DB_NAME,
    entities: [User],
    autoLoadEntities: true,
    synchronize: true,
  },
});
