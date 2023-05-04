import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

const SetNewPassword = () => {
    const {code} = useParams();
    const {register, handleSubmit, formState: {errors}, watch, setError} = useForm();

    const onSubmit = data => {
        console.log(data)
    }



    return (
        <AuthLayout pageTitle={'Set new password'} pageCaption="We will sen you a link for recovery your password. Check your mailbox">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="New Password" errors={errors['newPassword']} type="password" placeholder="**********" register={register("newPassword", {required: "Это поле обязательное", minLength: {value: 8, message: "Пароль должен быть больше 8 символов"}})} name="newPassword"/>
                <Input label="Confirm new Password" errors={errors['confirmNewPassword']} type="password" placeholder="**********" register={register("confirmNewPassword", {required: "Это поле обязательное", validate: val => watch('newPassword') !== val ? "Пароли не совпадают" : null, minLength: {value: 8, message: "Пароль должен быть больше 8 символов"}})} name="confirmNewPassword"/>
                <div style={{marginTop: 30}}><Button type="submit">Save password</Button></div>
            </form>
        </AuthLayout>
    )
}

export default SetNewPassword;
