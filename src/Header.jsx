function Header(){

    const mainTitle = "React: Tic Tac Toe";
    const subTitle = "My first react project!";

    return (
        <header className="
        font-Inter grid 
        w-full bg-transparent 
        grid-cols-1 
        grid-rows-2 
        justify-items-center 
        items-center
        py-5
        text-center
        rounded-lg
        md:border-0">
            
            <h1 className="
            font-bold 
            text-slate-100 
            text-3xl">
                {mainTitle}
            </h1>

            <span className="
            text-2xl
            font-medium 
            text-slate-100">
                {subTitle}
            </span>

        </header>
    )
}

export default Header;