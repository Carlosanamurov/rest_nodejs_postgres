import { Pool} from 'pg'

export const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'root',
    database:'bdalmacen',
    port:5432
})