import mongoose from "mongoose";
import {console} from "next/dist/compiled/@edge-runtime/primitives";

const connection = {};

export async function connectDb() {
    if (connection.isConnected) {
        console.log('Already connected to DB');
        return;
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log('use previous connection');
            return;
        }
        await  mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true
    });
    console.log('New connection to DB');
    connection.isConnected = db.connections[0].readyState;

}

export async function disConnectDb() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === "production") {
            await mongoose.disconnect();
            connection.isConnected = false;
        }else {
            console.log('not DisConnected');
        }
    }
}