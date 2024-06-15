import { FC } from "react";
import { useNavigate ,Link} from "react-router-dom";
const Register:FC = ()=>{
    let nav = useNavigate();
    function link_handle(){
        nav({
            pathname:"/manage"
        })
    }
    return <div>
        <div>注册页面</div>
        <button onClick={()=>{nav(-1)}}>返回登陆页</button>
        <button onClick={link_handle}>管理页面</button>
        <Link to="/question/edit/5">统计</Link>
    </div>
}

export default Register; 