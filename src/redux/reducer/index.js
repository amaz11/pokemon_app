import { combineReducers } from "redux"
import {pokemonListReducer} from './PokemonReducer'
import { pokemonMultipleReducer } from "./pokemonMultipleReducer"

export const rootReducer = combineReducers({
    pokemonListReducer,
    pokemonMultipleReducer
}) 