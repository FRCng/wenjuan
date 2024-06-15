import { FC } from "react";
import { useParams } from "react-router-dom";
const Edit:FC = ()=>{
    let {id} = useParams()
    return <div>编辑-{id}</div>
}

export default Edit