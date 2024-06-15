import { FC } from "react";
import styles from "./question.module.scss";
type PropsDataType = {
  id: string;
  title: string;
  isPublished: boolean;
  isStart: boolean;
  answerCount: number;
  creatAt: string;
};

const Question: FC<PropsDataType> = (props: PropsDataType) => {
  let { title, isPublished, isStart, answerCount, creatAt } = props;
  return (
    <>
      <div className={styles.box}>
        <div className={styles["box-head"]}>
          <div>问卷一</div>
          <div>
            {isPublished ? (
              <span style={{ color: "green" }}>已发布</span>
            ) : (
              <span style={{ color: "ccc" }}>未发布</span>
            )}
            <span>答卷：{answerCount}</span>
            <span>{creatAt}</span>
          </div>
        </div>
        <div className={styles["box-footer"]}>
          <div>
            <button>编辑问卷</button>
            <button>数据统计</button>
          </div>
          <div>
            <button>标星</button>
            <button>复制</button>
            <button>删除</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
