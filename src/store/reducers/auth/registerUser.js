import userApi from '../../../api/users'

export const signupUser = async ({email, password, firstName, lastName}) => {

    try {
        const createdUser = await userApi.register({email, password, returnSecureToken: true})

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

        console.log(userData.data)

        return {...createdUser.data, ...userData.data}
    }catch (e){
        console.log(e)
    }

}


// export const register = async ({email, password, firstName, lastName}) => {
//
//     const data = {
//         email, password, firstName, lastName
//     }
//     debugger;
//         return data
    // try {
    //     const createdUser = await userApi.register({email, password, returnSecureToken: true})
    //
    //     const user = {
    //         id: createdUser.data.localId,
    //         firstName,
    //         lastName,
    //         image: '',
    //         email,
    //         location: '',
    //         status: '',
    //         socialMedias: [],
    //         interests: []
    //     }
    //
    //     const userData = await userApi.saveUserData(user)
    //
    //     console.log(createdUser.data)
    //     console.log(userData.data)
    //
    //     return {...createdUser.data, ...userData.data}
    //
    //     return {
    //         success: true,
    //         email
    //     }
    // }catch (e){
    //     console.log(e)
    // }
// }

