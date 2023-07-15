import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

const color = ["#ff0808", "#fcf003", "#0f7504", "#00f2ff"]
const mrgin = [-5, 5, 15, 25];
const snakeStart = [27,43,50,55,64,88,94,98];
const snakeEnd = [6,9,11,34,22,51,48,3];
const ladderStart = [5,12,19,28,36,60,66,72];
const ladderEnd = [26,71,40,54,76,79,87,91];
const dices = [<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>,
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM352 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>,
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>,
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm160 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM352 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>,
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>,
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm160 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
]

const Players = () => {
    const [array, setArray] = useState([{id: 1, points: 1, color: color[0], x: -270, y: 0, profile: "images/player1.jpg"},
                                        {id: 2, points: 1, color: color[1], x: -270, y: 450, profile: "images/profile2.jpg"},
                                        {id: 3, points: 1, color: color[2], x: 770, y: 0, profile: "images/profile3.jpeg"},
                                        {id: 4, points: 1, color: color[3], x: 770, y: 450, profile: "images/profile4.jpg"}]
    );

    const [player, setPlayer] = useState(0);
    const [diceValue, setDiceValue] = useState(0);
    const [diceDisable, setDiceDisable] = useState(false);

    const divRef = useRef(null);

    const handleNextPlayer = () => {
        if(player < 3){
            setPlayer(player + 1);
        }else{
            setPlayer(0);
        }
    }

    const handleReset = () => {
        let newArray = [...array];
        newArray[0].points = 1;
        newArray[1].points = 1;
        newArray[2].points = 1;
        newArray[3].points = 1;

        setArray(newArray);
        setPlayer(0);
        setDiceDisable(false);
    }

    const movePieces = (nextPosition) => {
        const newPosition = [...nextPosition];
        newPosition[player].points += 1;
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(newPosition);
            }, 200);
        }) 
    }

    const AddValue = async() => {
        let newVal = Math.floor(Math.random() * 6);
        setDiceValue(newVal);
        let nextPosition = [...array];
        if(nextPosition[player].points + newVal + 1 <= 100){
            for(let i=0; i<=newVal; i++){
                const result = await movePieces(nextPosition);
                nextPosition = result;
                setArray(nextPosition);
            }
            // nextPosition[player].points += newVal + 1;
        }

        if(nextPosition[player].points === 100){
            alert(`Player ${player + 1} Won the Game!`);
            handleReset();
            return;
        }
        
        let newPosition = nextPosition[player].points;

        
        if(snakeStart.indexOf(newPosition) !== -1){
            nextPosition[player].points = snakeEnd[snakeStart.indexOf(newPosition)];
        }
        if(ladderStart.indexOf(newPosition) !== -1){
            nextPosition[player].points = ladderEnd[ladderStart.indexOf(newPosition)];
        }
        setArray(nextPosition);

        if(newVal !== 5){
            setTimeout(() => {
                handleNextPlayer(); 
            }, 1500); 
        }
        setTimeout(() => {
            setDiceDisable(false);
        }, 1500);
    }

    const handleDiceValue = () => {
        setDiceDisable(true);
        const interval = setInterval(() => {
            let newVal = Math.floor(Math.random() * 6);
            setDiceValue(newVal);
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            AddValue();
        }, 2000);

        return () => clearInterval(interval); 
    }

    return (
        <>
            {array.map((obj, index) => {
                let x = (((obj.points - 1) % 10) * 68.5);
                let y = Math.floor((obj.points - 1) / 10);
                if(y % 2 !== 0){
                    x = 617 + mrgin[index] - x;
                }else{
                    x += mrgin[index]
                }
                return <Individual key={obj.id} color={obj.color} x={x} y={y * 68.5 + 10}>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>
                </Individual>
            })}
            
            {array.map((obj) => {
                return obj.id === player + 1 ? <Card color={obj.color} x={obj.x} y={obj.y}>
                    <PlayerInfo>
                        <img src={obj.profile} alt="image" />
                       <h2>{"Player " + obj.id}</h2>
                        <h3>{"Points " + obj.points}</h3>
                    </PlayerInfo>
                    <Dice ref={divRef} onClick={handleDiceValue} disabled={diceDisable} color={obj.color}>
                        {dices[diceValue]}
                    </Dice>
                </Card> :  <Card color={obj.color} x={obj.x} y={obj.y}>
                    <PlayerInfo>
                        <img src={obj.profile} alt="image" />
                        <h2>{"Player " + obj.id}</h2>
                        <h3>{"Points " +obj.points}</h3>
                    </PlayerInfo>
                </Card>
            })}
            
        </>
    )
}

const Individual = styled.div`
    height: 60px;
    width: 60px;
    position: absolute;
    bottom: ${props => props.y}px;
    left: ${props => props.x + 10}px; 
    border: none;
    &>svg{
        height: 40px;
        width: 40px;
        fill: ${props => props.color};
        border: none;
    }
`;

const Dice = styled.button`
    background-color: ${props => props.color};
    height: 100px;
    width: 100px;
    position: absolute;
    left: 140px;
    top: 120px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    /* Override color changes on enabled or disabled state */
    &:enabled {
        /* background-color: transparent; */
        color: transparent;
    }
    &:disabled {
        opacity: 1;
        cursor: not-allowed;
    }
    & > svg{
        height: 80px;
        width: 80px;
        fill: white;
    }
`;

const Card = styled.div`
    position: absolute;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
    height: 250px;
    width: 200px;
    border: 5px solid ${props => props.color};
    background-color: black;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    border-radius: 20px;
`;

const PlayerInfo = styled.div`
    color: white;
    & > img{
        height: 100px;
        width: 150px;
        border-radius: 50%;
    }
    &>h2{
        margin-top: 0;
    }
`;

export default Players;

