
function servantcard(prop){

   return( prop.servant_owned ? 
    <div className="contentCardtrue">
        <img src={prop.servant_image}></img>
        <p>{prop.servant_name}</p>
        <p>{prop.servant_class}</p>
    </div>
    :
    <div className="contentCardfalse">
        <img src={prop.servant_image}></img>
        <p>{prop.servant_name}</p>
        <p>{prop.servant_class}</p>
    </div>
   )
}

export default servantcard