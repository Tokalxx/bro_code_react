
function servantcard(prop){

   return(
    <div className="contentCard">
        <img src={prop.servant_image}></img>
        <p>{prop.servant_name}</p>
        <p>{prop.servant_class}</p>

    </div>
   )
}

export default servantcard