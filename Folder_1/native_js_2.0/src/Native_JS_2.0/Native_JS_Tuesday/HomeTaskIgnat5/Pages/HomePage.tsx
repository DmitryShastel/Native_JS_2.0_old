import React, {useEffect} from 'react';
import {Grid} from "@material-ui/core";

export const HomePage = () => {

    const styles = {
        container: {
            height: '100vh',
            width: '100vw',
            display: 'table',
        },
        image: {
            width: '100%',
            height: '50%',
            objectFit: 'cover' as 'cover',
        }
    }


    const imgSrc = 'https://st2.depositphotos.com/3591429/12552/i/600/depositphotos_125524360-stock-photo-diversity-friends-near-wall-with.jpg'

    useEffect(() => {
        // добавляем стиль overflow: hidden для body
        document.body.style.overflow = 'hidden';

        // удаляем стиль overflow: hidden при размонтировании компонента
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    return (
        <Grid container style={styles.container}>

            <Grid item>
                <img src={imgSrc} alt='404 error' style={styles.image}/>
            </Grid>

        </Grid>
    );
};