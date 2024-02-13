import CustomButton from "../reusable-components/forms/CustomButton";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <CustomButton
          onClick={handleButtonClick}
          text="Ingresar con Google"
          icon={FcGoogle}
        />
      </div>
    </div>
  );
}

export default Login;
