import { connect } from "mongoose";
export const ConeccionDB = async () => {
  try {
   // add your own uri below
  const URL: any = process.env.URL || "mongodb://localhost:27017/test";
  console.log(URL);
  await connect(URL, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Conectado ")
  } catch(err) {
    console.error("Error en la base de datos")
  }
};
