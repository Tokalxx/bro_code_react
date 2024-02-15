import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';  
import Servant from './servant.jsx';


function App() {

    const saber = [{id: 1, trueName: 'Sigurd', rarity: 5},
                   {id: 2, trueName: 'Salter', rarity: 4}
                   ,{id: 3, trueName: 'Bediver',rarity: 3}];
    const archer = [{id: 4, trueName: 'Gilgamesh', rarity: 5},
                   {id: 5, trueName: 'Emiya', rarity: 4}
                  ,{id: 6, trueName: 'Robin',rarity: 3}]               

  return(
    <>
      <Header/>
      <Food/>
      <Servant />
      <Footer/>
    </>

  );
}

export default App
