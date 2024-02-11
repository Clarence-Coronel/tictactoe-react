function Tile(){
    return (
        <div className="bg-slate-100 md:bg-neutral-200/70 md:hover:bg-neutral-200/90 rounded-lg w-[100%] h-[25vw] md:w-[10vw] md:h-[10vw]"></div>
    );
}

function Board(){
    const tiles = [];

    for(let i = 0; i < 9; i++){
        tiles.push(<Tile key={i}/>);
    }

    return (
        <div className="grid grid-rows-3 grid-cols-3 w-full h-fit gap-3 justify-items-center md:w-fit">
           {tiles}
        </div>
    );
}

export default Board