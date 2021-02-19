import React from 'react'
import styles from './Fish.module.scss';
import axios from 'axios'
import ReactCardFlip from 'react-card-flip';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import './swiper.scss'

SwiperCore.use([Navigation, Pagination])

const api = axios.create({
    baseURL: 'https://lajtowa-biochemia.firebaseio.com/'
})



class Fish extends React.Component {

    async componentDidMount() {
       const id = window.location.href.split('/').pop()
       await api.get('/-' + id +'.json').then(res => {
            console.log(res.data.bialkowe)
            this.setState({list: res.data.bialkowe})
        }).catch(() => {})
    }

    state = {
        list: [],
        fliped: false
    }

    flipSite = () => {
        this.setState({fliped: !this.state.fliped});
    }
    render() {
        return (
            <>
            <div className={styles.wrapper}>
                <a className={styles.goBack} href="/fiszki">
                    <p>
                        Wróć do fiszek
                    </p>
                </a>
                <div className={styles.backgroundLeft}>
                    <img src="https://i.ibb.co/kJjt3z8/fishes-left.png" />
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={50}
                    speed={700}
                    navigation
                    pagination={{type: 'fraction'}

                }
                >

                    {this.state.list.map(a => (
                        <>
                        <SwiperSlide key={a.image} className={styles.test} key={a.image}>
                            <ReactCardFlip isFlipped={this.state.fliped} infinite className={styles.box}>
                                <div onClick={this.flipSite} className={styles.box}>
                                    <p className={styles.name}>{a.name}</p>
                                    <img src={a.image} />
                                </div> 
                                <div onClick={this.flipSite} className={styles.box}>
                                    <ul>
                                    {a.list 
                                    ? a.list.map(el => (
                                        <li>{el}</li>
                                    ))
                                    : <></>
                                    }
                                    </ul>
                                </div>
                                
                            </ReactCardFlip>
                        </SwiperSlide>
                        </>
                    ))}
                </Swiper>
                <div className={styles.backgroundRight}>
                    <img src="https://i.ibb.co/8dcd00V/fishes-right.png" />
                </div>
                <img style={{cursor:"pointer"}} src="https://i.ibb.co/4FJkw4R/Layer-3.png" onClick={this.flipSite}>
                </img>
            </div>
            </>
        )
    }
}

export default Fish;

