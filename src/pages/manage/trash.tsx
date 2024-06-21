import { FC, useState } from "react";
import { Button, Empty, Table ,Tag,Space,Modal,message} from "antd";
import styles from "./common.module.scss";
import ListSearch from "../../components/search";
import { WarningFilled } from "@ant-design/icons";

const rawQuestionList = [
  {
    id: "q1",
    title: "问卷1",
    isPublished: true,
    isStart: false,
    answerCount: 6,
    creatAt: "2024年6月1日 20:00:00",
  },
  {
    id: "q2",
    title: "问卷2",
    isPublished: false,
    isStart: false,
    answerCount: 2,
    creatAt: "2024年6月2日 23:00:00",
  },
  {
    id: "q3",
    title: "问卷3",
    isPublished: true,
    isStart: true,
    answerCount: 3,
    creatAt: "2024年6月3日 10:00:00",
  },
  {
    id: "q4",
    title: "问卷4",
    isPublished: false,
    isStart: false,
    answerCount: 4,
    creatAt: "2024年6月5日 15:00:00",
  },
];

const columns = [
  {
    title: "标题",
    dataIndex: "title"
  },
  {
    title: "问卷数量",
    dataIndex: "answerCount"
  },
  {
    title: "问卷状态",
    dataIndex: "isPublished",
    render: (isPublished:boolean) => isPublished?<Tag color="blue">已发布</Tag>:<Tag>未发布</Tag>,
  },
  {
    title:"创建时间",
    dataIndex: "creatAt"

  }
];

const {confirm}= Modal;

const Trash: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList);
  const [selectedIds,setSelectedIds] = useState<string[]>([])

  function del_handle(){
    confirm({
        title:"警告",
        content:"是否删除此问卷？",
        icon:<WarningFilled />,
        onOk:()=>message.info('已删除')
  
      })
  }
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>回收站 </h3>
        </div>
        <div className={styles.right}><ListSearch></ListSearch></div>
      </div>
      <div>

      <Space style={{marginBottom:'17px'}}>
        <Button type="primary">恢复</Button>
        <Button type="primary" danger onClick={del_handle}>删除</Button>
        </Space>
        {questionList.length === 0 && <Empty></Empty>}
        <Table dataSource={questionList} columns={columns} rowKey={(q)=>q.id} 
            rowSelection={{
                type:"checkbox",
                onChange:(selectedRowKeys)=>{
                    setSelectedIds(selectedRowKeys as string[])
                    console.log(selectedRowKeys)
                }
            }}
            pagination={false}
        />
      </div>
      <div>分页</div>
    </div>
  );
};

export default Trash;
