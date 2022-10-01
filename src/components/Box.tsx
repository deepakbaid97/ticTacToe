import { ReactElement } from "react";

interface Box {
    color: string
    Piece?: React.ReactElement
}

const Box = ({color, Piece}:Box) => {
    console.log(typeof Piece);
    return (
        <div className={`box ${color}`}>
            {Piece}
        </div>
    );
}

export default Box;