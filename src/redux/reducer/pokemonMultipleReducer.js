const initalState = {
    loading: false,
    data:{},
    errorMsg: ""
}

export const pokemonMultipleReducer = (state = initalState, action) =>{
    switch (action.type) {
        case 'POKEMON_MULTIPLE_LOADING':
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
            case 'POKEMON_MULTIPLE_SUCCESS':
            return {
                ...state,
                loading: false,
                errorMsg: "",
                data:{
                    ...state.data,
                    [action.pokemonName]:action.payload
                }
            }
            case 'POKEMON_MULTIPLE_FAIL':
            return {
                ...state,
                loading: false,
                errorMsg: "Unable to Find Pokemon"
            }
    
        default:
            return state
    }
}