import { FC } from "react";
import { useNavigate } from "react-router-dom";
const Login: FC = () => {
    let nav = useNavigate();

    function goto(){
        nav("/register")
    }
  return (
    <>
      <button>登陆</button>
      <button onClick={goto}>注册</button>
    </>
  );
};

export default Login;
