import { useState } from "react";
import Card from "../Card/Card";
import './grid.css'
import isWinner from '../Win/Winner'
function Grid({totalCards}){
    const [board, setboard] = useState(Array(totalCards).fill(""))
    const [turn, setTurn] = useState(true);
    const [winner,SetWinner] = useState(null);
    function play(index){
        if(turn == true){
            board[index] = 'O';
        }
        else {
            board[index] = 'X';
        }
        const win = isWinner(board,turn ? "O" : "X");
        if(win){
            SetWinner(win)
        }
        setboard([... board]);
        setTurn(!turn);
    }
    function reset()
    {
        setTurn(true);
        SetWinner(null); 
        setboard(Array(totalCards).fill(""))
    }
     return (
        <div className="gridwrap">{
            winner && (
                <>
                    <h1 className="win">Winner is {winner}</h1>
                    <button className="btn" onClick={reset}>Reset</button>
                </>
                
            )
        }
            <h1 className="top">Current turn: {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map((el,idx) => <Card gameend = {winner ? true:false} key ={idx} onPlay={play} user={el} index={idx}/>)}
            </div>
        </div>
        
        
    );
}
export default Grid;