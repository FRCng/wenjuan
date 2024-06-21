import { FC } from "react";
import styles from "./question.module.scss";
import { Button, Space, Tag, Popconfirm,Modal ,message} from "antd";
import { useNavigate } from "react-router-dom";
import { TagFilled, StarOutlined, StopOutlined,WarningFilled } from "@ant-design/icons";

type PropsDataType = {
  id: string;
  title: string;
  isPublished: boolean;
  isStart: boolean;
  answerCount: number;
  creatAt: string;
};

const {confirm}= Modal;

const Question: FC<PropsDataType> = (props: PropsDataType) => {
  let { title, isPublished, isStart, answerCount, creatAt, id } = props;
  const nav = useNavigate();
 
  function del_question(id: string) {
    console.log(id);
    confirm({
      title:"警告",
      content:"是否删除此问卷？",
      icon:<WarningFilled />,
      onOk:()=>message.info('已删除')

    })
  }
  function confirm_handle() {
    message.success('复制成功')
  }
  function cancel() {}
  return (
    <>
      <div className={styles.box}>
        <div className={styles["box-head"]}>
          <div>
            {isStart && <TagFilled style={{ color: "red" }}></TagFilled>}&nbsp;
            {title}
          </div>
          <div>
            <Tag color={isPublished ? "blue" : "magenta"}>
              {isPublished ? "已发布" : "未发布"}
            </Tag>
            <span>答卷：{answerCount}</span>
            <span>{creatAt}</span>
          </div>
        </div>
        <div className={styles["box-footer"]}>
          <div>
            <Space>
              <Button
                type="primary"
                onClick={() => nav(`/question/edit/${id}`)}
              >
                编辑问卷
              </Button>
              <Button
                type="primary"
                onClick={() => nav(`/question/stat/${id}`)}
                disabled={!isPublished ? true : false}
              >
                数据统计
              </Button>
            </Space>
          </div>
          <div>
            <Space>
              <Button>
                {isStart ? <StopOutlined /> : <StarOutlined />}
                {isStart ? "取消标星" : "标星"}
              </Button>
              <Popconfirm
                title="是否复制此问卷？"
                okText="确定"
                cancelText="取消"
                onConfirm={()=> message.success('复制成功')}
                onCancel={cancel}
              >
                <Button>复制</Button>
              </Popconfirm>
              <Button onClick={() => del_question(id)}>删除</Button>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
