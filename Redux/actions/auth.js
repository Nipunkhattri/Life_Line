import * as api from '../api'
import { setcurrentUser } from './currentreducer';

export const signup = (authdata)=>async (dispatch)=>{
    console.log(authdata);
    try {
        const {data} = await api.signup(authdata);
        // console.log(data);
        dispatch({type:'AUTH',data})
        dispatch(setcurrentUser(JSON.parse(localStorage.getItem('profile'))))
        // NavigationActions.navigate({CreateAccount:'CreateAccount'});
    } catch (error) {
        console.log(error);
    }
}
export const login = (authdata)=>async(dispatch)=>{
    try {
        console.log(authdata);
        const {data} = await api.login(authdata);
        dispatch({type:'AUTH',data})
        dispatch(setcurrentUser(JSON.parse(localStorage.getItem('profile'))))
        // NavigationActions.navigate({Intro:'Intro'});
    } catch (error) {
        console.log(error);
    }
}