

function Food(){

    const food1 = "Carrots";
    const food2 = "Avacados";


    return(
        <ul>
            <li>Meat</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}

export default Food