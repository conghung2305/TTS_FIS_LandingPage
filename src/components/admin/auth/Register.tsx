import useUser from "../../../hooks/useUser"
import AuthForm from "../AuthForm";
const Register = ()=>{
 const {handleRegister} = useUser();
 return (
    <div>
        <AuthForm onSubmit={handleRegister}/>
    </div>
 )
}
export default Register