function Reducer(state, action) {

    switch (action.type) {
        case "select_genere": {
            return {
                ...state,
                character_name: action.payload,
            }
        }
        case "set_questions": {
            return {
                ...state,
                questions: action.payload,
            }
        }
        case "update_question_index": {
            return {
                ...state,
                currentQuestionIndex: action.payload,
            }
        }
        case "update_score": {
            return {
                ...state,
                score: action.payload,
            }
        }
        case "reset_game": {
            return {
                ...state,
                currentQuestionIndex: 0,
                questions: [],
                score: 0,
            }
        }
        default:
            return state;
    }
}


export { Reducer }
