import  Home  from "../components/HomePage.js/HomePage";
import { SignUp } from "../components/CreateAccount";
import DonorCat from '../components/HomePage.js/DonorCat';

export default function (Stack) {
    return(
        <>
         <Stack.Screen name='Home'options={{ headerShown: false }}   component={Home}/>
         <Stack.Screen name='DonorCat'  component={DonorCat} />
        </>
    )
}