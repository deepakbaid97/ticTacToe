import { ReactElement } from 'react';
import Cross from '../assets/cross';
import Circle from '../assets/Circle';
import "./Board.css";
import Box from './Box';
import useHouseStore from '../store/House';
interface Board {
    size:number
}

const Board = (props:Board) => {
    const {board} = useHouseStore();
    const boxes:ReactElement[] = [];

    for (let i = 0; i < props.size; i++){
        const boxesRow:ReactElement[] = [];
        for (let j = 0; j < props.size; j++){
            const fill = (i+j)%2? "#000": "#fff";
            const key = `${i}${j}`;
            const id = `${i}${j}`;
            let piece = <></>;

            if(board[i][j] === 1){
                piece = <Cross fill={fill}/>;
            }else if (board[i][j] === -1){
                piece = <Circle fill={fill}/>;
            }

            boxesRow.push(<Box key={key} id={id} color={((i + j) % 2 ? "light": "dark")} Piece={piece}/>);
        }
        boxes.push(<div className="box-row" key={`${i}`}>{boxesRow}</div>);
    }
    return (
        <div className='board'>
            {boxes}
        </div>
    );
}

export default Board;