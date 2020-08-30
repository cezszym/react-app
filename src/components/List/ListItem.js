import React, { useState } from 'react';
import styles from './ListItem.module.scss'
import { CSSTransition } from 'react-transition-group';
import Button from '../Button/Button';
import Title from '../Title/Title';
import List from '../List/List';



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
                    src={image} 
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
                    <CSSTransition
                    in={sub}
                    timeout={600}
                    classNames={{...styles}}
                    unmountOnExit
                    >
                    <List
                    items={sublist} isSub='yes' />
                    </CSSTransition>

                </div>
        </li>

);
}






export default ListItem;