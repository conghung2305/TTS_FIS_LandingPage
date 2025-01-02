import useUser from "../../../hooks/useUser"
import AuthForm from "../AuthForm";


const Login = ()=>{
 const {handleLogin} = useUser();
 return (
    <div className="bg-blue-900">
        <AuthForm onSubmit={handleLogin}/>
    </div>
 )
}
export default Login