import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Display = () => {
    const counter = useSelector(state => state.counter)
    return (    
    <Container>
        <div>Resultado</div>
        { counter }
    </Container>
    )
}

const Container = styled.div`
    background-color: #B8B8B8;
    font-weight: 600;
    width: 20vw;
    text-align: center;
    margin-top: 10px;
`

export default Display