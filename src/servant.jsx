import Servantcard from "./ServantCard/servantcard"
import imgae_emiya from './assets/emiya.jpg'
import imgae_ereshkigal from './assets/ereshkigal.jpg'
import imgae_cualter from './assets/cu_alter.jpg'
import PropTypes from 'prop-types';

function servant(){

    return(
        <div className="cardHolder">
            <div className="card">
            <Servantcard servant_name="Emiya"
            servant_class="Archer"
            servant_image={imgae_emiya}/>
         </div>
         <div className="card">
            <Servantcard servant_name="Ereshkigal"
            servant_class="Archer"
            servant_image={imgae_ereshkigal}/>
         </div>
         <div className="card">
            <Servantcard servant_name="Cu Alter"
            servant_class="Archer"
            servant_image={imgae_cualter}/>
         </div>
        </div>
    )
}
servant.PropTypes={
    servant_name:PropTypes.string,
    servant_class:PropTypes.string,
    servant_image:PropTypes.string
}
servant.defaultProps={
    servant_name: 'servant',
    servant_className: 'class',
    servant_image: 'image'
};

export default servant
