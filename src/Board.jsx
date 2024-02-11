import { useState } from "react";

function Tile({eventHandler, content }) {
    return (
        <div 
            onClick={eventHandler} 
            className="
                bg-slate-100 
                md:bg-neutral-200/70 
                md:hover:bg-neutral-200/90 
                rounded-lg 
                w-[100%] 
                h-[25vw] 
                md:w-[10vw] 
                md:h-[10vw]
                md:hover:cursor-pointer
                flex
                justify-center
                items-center
                text-cyan-600
                font-bold
                text-3xl
                font-mono"
        >
            {content}
        </div>
    );
}

function Board() {
    const [currentMove, setCurrentMove] = useState("X");
    const [board, setBoard] = useState(Array(9).fill(""));

    const moveHandler = (index) => {
        if (board[index] !== "") return;
        const newBoard = [...board];
        newBoard[index] = currentMove;
        setBoard(newBoard);
        setCurrentMove(currentMove === "X" ? "O" : "X");
    };

    return (
        <div className="grid grid-rows-3 grid-cols-3 w-full h-fit gap-3 justify-items-center md:w-fit">
            {board.map((content, index) => (
                <Tile 
                    key={index} 
                    eventHandler={() => moveHandler(index)} 
                    content={content} 
                />
            ))}
        </div>
    );
}

export default Board;
