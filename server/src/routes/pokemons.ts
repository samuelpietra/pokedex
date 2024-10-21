import express from 'express';

import { PokemonsController } from '../controllers/pokemons';

const router = express.Router();

router.get('/api/v1/pokemons/:id', PokemonsController.populatePokemonById);
router.get('/api/v1/pokemons', PokemonsController.populatePokemonsByPage);

export { router as pokemonsRouter };
