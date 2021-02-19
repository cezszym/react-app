import React, { useState } from 'react';
import styles from './ListItem.module.scss'
import { CSSTransition } from 'react-transition-group';
import Button from '../Button/Button';
import Title from '../Title/Title';
import List from '../List/List';
import tube from '../../assets/images/tube.png'



const ListItem = (
    {title,
    description,
    image,
    link,
    sublist,
    isSub}) => {
    
    const ImageTag = isSub  ? "div" : "img";
 
    const [sub, setSub] = useState(false)
    
    
    return (


        <li className={isSub  ? styles.subWrapper : styles.wrapper}>
                { image && <ImageTag 
                    src={tube} 
                    className={styles.image} 
                    alt={title}
                />}
                <div>


                    <Title>{title}</Title>
                    <p className={styles.description}>
                        {description}
                    </p>
                    { isSub ? <Button secondary
                        href={link}>Zobacz fiszke</Button> :
                        <Button 
                        onClick={() => setSub(!sub)}>Zobacz więcej</Button>
                    }
                    {sub 
                    ?
                    <div className={styles.subContainer}>
                        <List
                            items={sublist} isSub='yes' />
                    </div>  
                    : <></>
                    }

                </div>
        </li>

);
}






export default ListItem;