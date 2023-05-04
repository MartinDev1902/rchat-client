import styles from './Input.module.sass'

const Input = ({type, label, placeholder, register, name, errors}) => {
    return (
        <div className={styles.inputGroup}>
            <div>
                <label htmlFor={name}>{label}</label>
                <span className="error">{errors ? errors.message : null}</span>
            </div>
            <input {...register} id={name} type={type} placeholder={placeholder} name={name}/>
        </div>
    )
}

export default Input;
