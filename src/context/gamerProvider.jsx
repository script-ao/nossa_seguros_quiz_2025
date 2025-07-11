import { useReducer } from "react";
import {InitialStage} from "./initialState"
import {Reducer} from "./reducer"
import {GameContext} from "./gameContext"

function GameProvider ({children}){
    const value = useReducer(Reducer,InitialStage )
    return(
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}

export {GameProvider}