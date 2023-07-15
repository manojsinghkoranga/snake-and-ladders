import styled from "styled-components";

const StartWindow = (props) => {
    const {start, setStart} = props;

    return (
        <Container>
            <h1>Start the Game!</h1>
            <p>To start the Game press Start!</p>
            <button onClick={() => setStart(!start)}>Start</button>
        </Container>
    )
}

const Container = styled.div`
    height: 200px;
    width: 400px;
    border-radius: 20px;
    /* color: white; */
    background-color: lightgreen;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &>h1{
        padding: 0;
        margin: 0;
        padding-bottom: 10px;
    }

    &>p{
        padding: 0;
        margin: 0;
        font-weight: 600;
        padding-bottom: 10px;
    }

    &>button{
        height: 40px;
        width: 80px;
        background-color: rgb(154, 205, 50);
        border: none;
        border-radius: 10px;
        font-size: 1.2rem;
        font-weight: 600;
        &:hover{
            background-color: white;
            color: yellowgreen;
            transform: scale(1.25);
        }
    }

`;

export default StartWindow;

