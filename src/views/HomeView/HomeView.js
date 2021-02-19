import React from 'react';
import MainGrid from '../../components/MainGrid/MainGrid';
// import firebase from 'firebase'
// import firebaseConfig from '../../firebaseConfig'
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://lajtowa-biochemia.firebaseio.com/'
})


class HomeView extends React.Component {
    render() {
        return (
            <>
            <MainGrid imageLink="https://i.ibb.co/8bb3xPb/Group-10.png"/>
            </>
        )
    }
}
export default HomeView;