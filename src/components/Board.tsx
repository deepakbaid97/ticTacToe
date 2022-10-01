import { ReactElement } from 'react';
import "./Board.css";

interface Board {
    size:number
}

const Board = (props:Board) => {
    const boxes:ReactElement[] = [];

    for (let i = 0; i < props.size; i++){
        const boxesRow:ReactElement[] = [];
        for (let j = 0; j < props.size; j++){
            boxesRow.push(<Box color={((i + j) % 2 ? "light": "dark")}/>)
        }
        boxes.push(<div>{boxesRow}</div>)
    }
    return (
        <div className='board'>
            {boxes}
        </div>
    );
}

interface Box {
    color: string
    piece?: JSX.IntrinsicElements
}

const Box = ({color, piece}:Box) => {
    console.log(typeof piece);
    return (
        <div className={`box ${color}`}>
            
        </div>
    );
}

export default Board;
