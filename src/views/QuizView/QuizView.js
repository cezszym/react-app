import React from 'react';
import AppContext from '../../context';
import MainGrid from '../../components/MainGrid/MainGrid';

const QuizView = () => (
    <AppContext.Consumer>
       {(context) => (
           <MainGrid 
           listName="Quizy" 
           items={context.fishList} 
           imageLink="https://i.ibb.co/Dp5gpBQ/Quiz-Guy-1.png"
           />
           
       )} 
    </AppContext.Consumer>
);

export default QuizView;