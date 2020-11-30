import { useDispatch } from 'react-redux'
import { add, subtract, multiply, divide } from '../actions'
import styled from 'styled-components'

const Counter = () => {
    const dispatch = useDispatch()
    
    let firstInput = 0
    let secondInput = 0

    return(
        <div>
            <Inputs type="number" placeholder="0" onChange={(e) => firstInput = e.target.value}/>
            <Inputs type="number" placeholder="0" onChange={(e) => secondInput = e.target.value}/> <br/>
            <Buttons onClick={() => dispatch(subtract(firstInput, secondInput))}> - </Buttons>
            <Buttons onClick={() => dispatch(add(firstInput, secondInput))}> + </Buttons>
            <Buttons onClick={() => dispatch(multiply(firstInput, secondInput))}> * </Buttons>
            <Buttons onClick={() => dispatch(divide(firstInput, secondInput))}> / </Buttons>
        </div>
    )
}

const Inputs = styled.input `
    background-color: #B8B8B8;
    height: 20px;
    width: 200px;
    font-size: 15px;
    box-shadow: 0 0 0 0;
    outline: 0;
    font-weight: 600;
`

const Buttons = styled.button `
    background-color: #B8B8B8;
    height: 20px;
    width: 104px;
    box-shadow: 0 0 0 0;
    outline: 0;
    font-weight: 600;
`

export default Counter