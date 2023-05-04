import styles from './AuthLayout.module.sass'
import {useEffect, useState} from "react";
import Logo from "../../components/ui/Logo";
const AuthLayout = ({children, pageTitle, pageCaption}) => {
    const slides = [
        'https://cdn.pixabay.com/photo/2012/07/25/16/36/mt-hood-52840_1280.jpg',
        'https://cdn.pixabay.com/photo/2019/02/25/00/17/kitten-4018756_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/03/11/21/11/tiger-4923338_1280.jpg',
        'https://cdn.pixabay.com/photo/2019/04/22/08/55/puffin-4146015_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/11/08/11/52/pomegranate-3802408_1280.jpg'
        ]

    const [activeSlide, setActiveSlide] = useState(0);

    //TODO Make animation then slide is changed
    useEffect(() => {
        const interval = setInterval(() => {
                setActiveSlide(Math.floor(Math.random() * slides.length));
        }, 5000)

        return () => clearInterval(interval)
    }, []);

    return(
        <div className={styles.authLayout}>
            <div className={styles.authLayoutSlider} style={{backgroundImage: `url(${slides[activeSlide]})`}}></div>
            <div className={styles.authLayoutContent}>
                <Logo/>

                <div className={styles.authFormBlock}>
                    <h1>{pageTitle}</h1>
                    <p>{pageCaption}</p>
                    {children}
                </div>

            </div>
        </div>
    )
}

export default AuthLayout;
