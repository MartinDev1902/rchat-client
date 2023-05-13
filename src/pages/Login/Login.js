import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import styles from "./Login.module.sass"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/reducers/auth";

const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch()



    return (
        <AuthLayout pageTitle={'Login'}>

            <form onSubmit={handleSubmit(data =>  dispatch(loginUser({...data, returnSecureToken: true})))}>

                <Input label="Email" errors={errors['email']} type="email" placeholder="example@gmail.com"
                       register={register("email", {required: 'Это поле обязательное'})} name="email"/>
                <Input label="Password" errors={errors['password']} type="password" placeholder="**********"
                       register={register("password", {
                           required: "Это поле обязательное",
                           minLength: {value: 8, message: "Пароль должен быть больше 8 символов"}
                       })} name="password"/>

                <div className={[styles.link, styles.link__recovery].join(' ')}>
                    Forgot the password? <Link to="/recovery">Recovery password</Link>
                </div>

                <Button>Login</Button>

                <div className={[styles.link, styles.link__signup].join(' ')}>
                    Don’t have an account? <Link to="/register">SignUp</Link>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Login;
