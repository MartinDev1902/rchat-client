import styles from './Avatar.module.sass'

const Avatar = ({image, alt, size}) => {
    const classes = [styles.avatar, size === 'big' ? styles.avatar__big : size === 'small' ? styles.avatar__small : styles.avatar__small ]
    return (
        <div className={classes.join(' ')}>
            <img src={image} alt={alt}/>
        </div>
    )
}

export default Avatar;
