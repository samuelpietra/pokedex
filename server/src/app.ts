import express from "express";
import cors from "cors";

import { pokemonsRouter } from "./routes/pokemons";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(pokemonsRouter);

app.listen(PORT, () => {
  console.log(`🔥 Server is running on http://localhost:${PORT}`);
});
