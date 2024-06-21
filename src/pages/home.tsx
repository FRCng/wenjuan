import { ChangeEvent, FC, useState } from "react";
import styles from "./home.module.scss";
import { Typography,Button } from "antd";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;

const Home: FC = () => {
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查｜在线投票</Title>
        <Paragraph>
          已累计创建问卷100份，发布问卷90份，收到问卷答案20份
        </Paragraph>
        <Button type="primary" onClick={()=>nav('/manage')}>开始使用</Button>
      </div>
    </div>
  );
};

export default Home;
