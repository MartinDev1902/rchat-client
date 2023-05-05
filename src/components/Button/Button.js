import styles from './Button.module.sass'

const Button = ({children}) => <button type="submit" className={styles.button}>{children}</button>;
    
export default Button;
