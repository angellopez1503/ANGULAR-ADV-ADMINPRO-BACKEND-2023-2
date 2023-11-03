import mongoose from 'mongoose'

const dbConnection = async () => {
   try {
    mongoose.connect(process.env.DB_CNN);
    console.log("DB conectado");
   } catch (error) {
    console.log(error);
    throw new Error('Error al ahora de iniciar la BD')
   }
}

export default dbConnection