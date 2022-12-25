import  login  from "../components/Intro";
import  SignUp  from "../components/CreateAccount";

export default function (Stack) {
    return(
        <>
         <Stack.Screen name='SignUp'options={{ headerShown: false }}   component={SignUp}/>
         <Stack.Screen name='login' options={{ headerShown: false }}  component={login}/>
        </>
    )
}