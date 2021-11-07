const insialState = {
    loading: false,
    data:[],
    errorMsg: "",
    count:0
}

export const pokemonListReducer = (state = insialState, action)=>{
    switch (action.type) {
        
        case 'POKEMON_LIST_LOADING':
            return {
                ...state,
                loading:true,
                errorMsg: ""
            }
    
        case 'POKEMON_LIST_SUCCESS':
            return {
                ...state,
                 loading:false,
                 data: action.payload.results,
                 errorMsg: "",
                 count : action.payload.count
                }
        case 'POKEMON_LIST_FAIL':
            return {
                 ...state,
                  loading:false,
                  errorMsg: "Unable To get Pokemon"
                    }            
        default:
            return state
    }
}