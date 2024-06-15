import { FC } from "react";
import { Outlet } from "react-router-dom";
const QuestionLayout:FC = ()=>{
    return <div>
        <div>QuestionPage</div>
        <Outlet></Outlet>
    </div>
}

export default QuestionLayout