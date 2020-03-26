import { ConnectionOptions, Connection, createConnection } from "typeorm";
import { Country } from '../Models/Entities/Country';

const parametros: ConnectionOptions = {
    type: "mysql",
    database: "proyectoshs",
    host: 'localhost',
    username: 'root',
    port: 3306,
    synchronize: true,
    entities: [
        Country
    ]
}

let connection: Connection = null;
export const connect = async () => {
    if(connection == null){
        connection = await createConnection(parametros);
        return connection
    }else{
        return connection
    }
}