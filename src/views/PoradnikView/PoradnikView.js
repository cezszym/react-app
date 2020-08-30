import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List'

const PoradnikView = () => (
    <AppContext.Consumer>
       {(context) => (
        <>
        <List items={context.poradnikList} />
        </>
       )} 
    </AppContext.Consumer>
);

export default PoradnikView;