import { FC } from "react";
import styles from "./logo.module.scss";
import { AliwangwangFilled } from "@ant-design/icons";

import { Space } from "antd";

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <Space>
      <AliwangwangFilled style={{ fontSize: '26px'}}/>

        {/* <DatabaseFilled style={{ fontSize: '26px',margin:0,lineHeight:1 }} /> */}
        <h1>小慕问卷</h1>
      </Space>
    </div>
  );
};

export default Logo;
