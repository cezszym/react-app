import React from "react";
import "./index.css";
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FishView from '../../views/FishView/FishView';
import QuizView from '../../views/QuizView/QuizView';
import PoradnikView from '../../views/PoradnikView/PoradnikView';
import Header from '../../components/Header/Header';
import FiszkaView from "../FiszkaView/FiszkaView";
import HomeView from '../HomeView/HomeView'; 
import fiszka from '../../data.js'

class Root extends React.Component {
  state = {
    fishList: [{
      image: 'https://cdn.icon-icons.com/icons2/830/PNG/512/chemistry-tube_icon-icons.com_66637.png',
      title: 'Aminiokwasy',
      description: 'Fiszki z wiedzą na temat poszczególnych aminowkasów',
      link: 'http://www.edunauka.pl/biochbialko.php',
      sublist: [{
        image: 'https://cdn.icon-icons.com/icons2/830/PNG/512/chemistry-tube_icon-icons.com_66637.png',
        title: 'Białkowe',
        description: 'Fiszki do nauki o aminokwasach białkowych',
        link: '/fiszka/1',
    },
]
  },
  {
      image: 'https://cdn.icon-icons.com/icons2/830/PNG/512/chemistry-tube_icon-icons.com_66637.png',
      title: 'Węglowodany',
      description: 'Fiszki z podstawową wiedzą o węglowodanach i z przykładami najważniejszych przedstawicieli tej grupy związków.',
      link: 'http://www.edunauka.pl/biochcukry.php',
      sublist: [],
  },
  {
      image: 'https://cdn.icon-icons.com/icons2/830/PNG/512/chemistry-tube_icon-icons.com_66637.png',
      title: 'Lipidy',
      description: 'Fiszki z podstawową wiedzą o lipidach występujących w organizmach żywych.',
      link: 'http://www.edunauka.pl/biochlipidy.php',
      sublist: [],
  }],
    quizList: [],
    poradnikList: [],

    fiszka1 : [...fiszka]

  };



  render() {
    const contextElements = {
      ...this.state,
    }
    
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/fiszki" component={FishView} />
            <Route exact path="/fiszka/1" component={FiszkaView} />
            <Route exact path="/quiz" component={QuizView} />
            <Route exact path="/poradnik" component={PoradnikView} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;

// 3. Dopasować Form.js do nowych potrzeb
// 4. Przystosować widoki podstron do nowych itemów
// 5. Wyświetlać odpowiednie notatki na podstronach 
