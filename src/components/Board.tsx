import { ReactElement } from 'react';
import "./Board.css";
import Box from './Box';
interface Board {
    size:number
}

const Board = (props:Board) => {
    const boxes:ReactElement[] = [];

    for (let i = 0; i < props.size; i++){
        const boxesRow:ReactElement[] = [];
        for (let j = 0; j < props.size; j++){
            boxesRow.push(<Box color={((i + j) % 2 ? "light": "dark")} Piece={<Piece/>}/>)
        }
        boxes.push(<div>{boxesRow}</div>)
    }
    return (
        <div className='board'>
            {boxes}
        </div>
    );
}

export default Board;