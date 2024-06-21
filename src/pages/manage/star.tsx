import { FC, useState } from "react";
import styles from "./common.module.scss";
import Question from "../../components/question";
import ListSearch from "../../components/search";
import {Empty} from "antd"
const rawQuestionList = [
    {id:"q1",title:"问卷1",isPublished:true,isStart:true,answerCount:6,creatAt:"2024年6月1日 20:00:00"},
    {id:"q2",title:"问卷2",isPublished:false,isStart:true,answerCount:2,creatAt:"2024年6月2日 23:00:00"},
    {id:"q3",title:"问卷3",isPublished:true,isStart:true,answerCount:3,creatAt:"2024年6月3日 10:00:00"},
    {id:"q4",title:"问卷4",isPublished:false,isStart:true,answerCount:4,creatAt:"2024年6月5日 15:00:00"}
]
const Star:FC = ()=>{
    const [questionList,setQuestionList] = useState(rawQuestionList);
    return <>
         <div className={styles.header}>
            <div className={styles.left}>
                <h3>星标问卷 </h3>
            </div>
            <div className={styles.right}><ListSearch></ListSearch></div>
        </div>
        <div className={styles.container}>
            {questionList.length===0&&<Empty></Empty>}
            {questionList.length!==0&&questionList.map(item=>{
                return <Question key={item.id} {...item}></Question>
            })}
           
        </div>
        <div>分页</div>
    </>
}

export default Star