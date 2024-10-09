function Article(){
    const name = "salman";
    const title = ["tutorial reactjs", "tutorial NextJs", "Tutorial NodeJs"];


    return (
    <>
    <div>{name}</div>
    <div>{title.map(title=>{
        return (
            <>
            <div>{title}</div>
            <div>{title}</div>
            </>
        )
        
        
})}
    </div>

    </>
    )
     
}

export default Article