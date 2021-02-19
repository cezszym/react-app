import React from 'react';
// import AppContext from '../../context';
import MainGrid from '../../components/MainGrid/MainGrid';

class QuizView extends React.Component  {
    state = {
        list: [
            {   image: 'https://cdn.icon-icons.com/icons2/830/PNG/512/chemistry-tube_icon-icons.com_66637.png',
                title: 'Quiz 1',
                description: 'Aminokwasy, peptydy, białka',
            },
            {   image: 'https://cdn.icon-icons.com/icons2/830/PNG/512/chemistry-tube_icon-icons.com_66637.png',
                title: 'Quiz 2',
                description: 'Enzymy, koenzymy',
            },
            {   image: 'https://cdn.icon-icons.com/icons2/830/PNG/512/chemistry-tube_icon-icons.com_66637.png',
                title: 'Quiz 3',
                description: 'Kwasy nukleinowe, biosynteza białka',
            },
            {
                image: 'https://cdn.icon-icons.com/icons2/830/PNG/512/chemistry-tube_icon-icons.com_66637.png',
                title: 'Quiz 4',
                description: 'Anabolizm i katabolizm ',
                sublist: [
                    {   
                        description: 'Aminokwasy i kwasy nukleinowe',
                        title: 'Quiz 4.1'
                    },
                    {
                        description: 'Węglowodany',
                        title: 'Quiz 4.2'
                    },
                    {
                        description: 'Lipidy',
                        title: 'Quiz 4.3'
                    }

            ],
            },
            {
                image: 'https://cdn.icon-icons.com/icons2/830/PNG/512/chemistry-tube_icon-icons.com_66637.png',
                title: 'Quiz 5',
                description: 'Płyny ustrojowe, biochemia narządów ',
            }
        ]
    }

    render() {
        return (
            <MainGrid 
            listName="Quizy" 
            items={this.state.list} 
            imageLink="https://i.ibb.co/Dp5gpBQ/Quiz-Guy-1.png"
            />
        )
    }
} 

// (
//     <AppContext.Consumer>
//        {(context) => (
//            <MainGrid 
//            listName="Quizy" 
//            items={context.fishList} 
//            imageLink="https://i.ibb.co/Dp5gpBQ/Quiz-Guy-1.png"
//            />
           
//        )} 
//     </AppContext.Consumer>
// );

export default QuizView;