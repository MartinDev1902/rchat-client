import userApi from '../../../api/users'

export const signupUser = async ({email, password, firstName, lastName}) => {

    try {
        const createdUser = await userApi.register({displayName: `${firstName} ${lastName}`, email, password, returnSecureToken: true})

        const user = {
            id: createdUser.localId,
            firstName,
            lastName,
            image: '',
            email,
            location: '',
            status: '',
            socialMedias: [],
            interests: []
        }
        const userData = await userApi.saveUserData(user)


        return {...createdUser.data, ...userData.data}
    }catch (e){
        console.error(e)
    }

}
