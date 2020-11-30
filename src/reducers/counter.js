import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from '../actions/types'

const defaultState ={
    counter: 0,
}

const counter = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD":
            return {
                counter: Number(action.firstInput) + Number(action.secondInput)
            }
        
        case "SUBTRACT":
            return {
                counter: Number(action.firstInput) - Number(action.secondInput)
            }

        case "MULTIPLY":
            return {
                counter: Number(action.firstInput) * Number(action.secondInput)
            }

        case "DIVIDE":
            return {
                counter: Number(action.firstInput) / Number(action.secondInput)
            }

        default:
            return state
    }
}

export default counter