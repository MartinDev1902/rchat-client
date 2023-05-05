import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from './SignUp.module.sass'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
const SignUp = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        console.log(data)
        //TODO: Send data to the server
    }

    return(
        <AuthLayout pageTitle={'Sign up'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="firstName" errors={errors["firstName"]} register={register("firstName", {required: "Это поле обязательное", minLength: {value: 2, message: "Значение должно быть не меньше 2 символов"}})} label="First name" type="text" placeholder="John"/>
                <Input name="lastName" errors={errors["lastName"]} register={register("lastName", {required: "Это поле обязательное", minLength: {value: 2, message: "Значение должно быть не меньше 2 символов"}})} label="Last name" type="text" placeholder="Doe"/>
                <Input label="Email" errors={errors['email']} type="email" placeholder="example@gmail.com" register={register("email", {required: 'Это поле обязательное'})} name="email"/>
                <Input label="Password" errors={errors['password']} type="password" placeholder="**********"
                       register={register("password", {
                           required: "Это поле обязательное",
                           minLength: {value: 8, message: "Пароль должен быть больше 8 символов"}
                       })} name="password"/>
                <div style={{marginTop: 30}}><Button>Sign up</Button></div>
                <div className={styles.link}>
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </form>
        </AuthLayout>
    )
}

export default SignUp;
