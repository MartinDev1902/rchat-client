import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import {useForm} from "react-hook-form";

const RecoveryPassword = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <AuthLayout pageTitle={'Recovery password'} pageCaption="We will sen you a link for recovery your password. Check your mailbox">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email" errors={errors['email']} type="email" placeholder="example@gmail.com" register={register("email", {required: 'Это поле обязательное'})} name="email"/>
                <div style={{marginTop: 30}}><Button type="submit">SendLink</Button></div>
            </form>
        </AuthLayout>
    )
}

export default RecoveryPassword;
