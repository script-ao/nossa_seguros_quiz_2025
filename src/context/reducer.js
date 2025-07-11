function Reducer (state, action){

    switch(action.type){
        case "select_genere":{
            

            return {
                ...state,
                character_name: action.payload,
            }
        }
    }
}


export {Reducer}