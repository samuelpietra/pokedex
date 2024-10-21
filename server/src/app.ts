import express from 'express';

import { pokemonsRouter } from './routes/pokemons';

// @FIXME: Temporary fix to avoid SSL issues
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(pokemonsRouter);

app.listen(PORT, () => {
  console.log(`🔥 Server is running on http://localhost:${PORT}`);
});
