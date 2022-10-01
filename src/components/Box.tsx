import { ReactElement } from "react";

interface Box {
    color: string
    id: string
    Piece?: React.ReactElement
}

const Box = ({color, id, Piece}:Box) => {
    console.log(typeof Piece);
    return (
        <div className={`box ${color}`} id={id}>
            {Piece}
        </div>
    );
}

export default Box;