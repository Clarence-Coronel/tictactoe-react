import { useState } from "react";

function Tile({ index, eventHandler }){
    return (
        <div data-index={index} onClick={eventHandler} 
        className="
        bg-slate-100 
        md:bg-neutral-200/70 
        md:hover:bg-neutral-200/90 
        rounded-lg w-[100%] 
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
        font-mono">
            
        </div>
    );
}



function Board(){
    const [turn, setTurn] = useState("X");
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

    // const board = [ "", "" ,"",
    //                 "", "" ,"",
    //                 "", "" ,""]

    const tiles = [];

    function setMove(element){
        console.log(element)
        setTurn("O");
    }

    for(let i = 0; i < 9; i++){
        tiles.push(<Tile index={i} key={i} eventHandler={setMove}/>);
    }

    return (
        <div className="grid grid-rows-3 grid-cols-3 w-full h-fit gap-3 justify-items-center md:w-fit">
           {tiles}
        </div>
    );
}

export default Board