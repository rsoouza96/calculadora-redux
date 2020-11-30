import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from './types'

export const add = (firstInput, secondInput) => {
    return { type: ADD, firstInput, secondInput }
}

export const subtract = (firstInput, secondInput) => {
    return { type: SUBTRACT, firstInput, secondInput }
}

export const multiply = (firstInput, secondInput) => {
    return { type: MULTIPLY, firstInput, secondInput }
}

export const divide = (firstInput, secondInput) => {
    return { type: DIVIDE, firstInput, secondInput }
}