import React from 'react';
import AppContext from '../../context';
import MainGrid from '../../components/MainGrid/MainGrid';

const FishView = () => (
    <AppContext.Consumer>
       {(context) => (
           <MainGrid 
           listName="Fiszki" 
           items={context.fishList} 
           imageLink="https://i.ibb.co/p08WRqc/Group-4.png"
           />
           
       )} 
    </AppContext.Consumer>
);

export default FishView;

