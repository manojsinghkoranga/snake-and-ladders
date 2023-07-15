import styled from "styled-components";
import Players from "./Players";

const colors = ['#808080', "#0000FF", "#008000", "#FFFF00", "#FF0000"]
const divs = Array(100);
let i=100;
while(i > 0){
    for(let j=0; j<10; j++){
        divs.push({val: i--, color: colors[j%5]});
    }
    let firstElement = colors.shift();
    colors.push(firstElement);
    firstElement = colors.shift(); 
    colors.push(firstElement);
    let k = i-9;
    for(let j=0; j<10; j++){
        divs.push({val: k++, color: colors[j%5]});
    }
    i -= 10;

    firstElement = colors.shift();
    colors.push(firstElement);
    firstElement = colors.shift(); 
    colors.push(firstElement);
    
}


const Board = () => {
    
    return (
        <>
        <Container>
            <img src="images/snakeAndLadder.jpg" alt="board" />
            <Players />
        </Container>
        </>
        
    )
}

const Container = styled.div`
    height: 700px;
    width: 700px;
    border: 1px solid black;
    position: relative;
    &>img{
        height: 100%;
        width: 100%;
    }
`;

export default Board;