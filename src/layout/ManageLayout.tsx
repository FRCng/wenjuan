import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
import { Button,Flex } from "antd";
import { useNavigate,useLocation } from "react-router-dom";

const ManageLayout: FC = () => {
    let nav = useNavigate();
    let {pathname} = useLocation();
    console.log(pathname,'===');
    
  return (
    <div className={styles["manage-box"]}>
      <div className={styles["manage-box-left"]}>
        <Button type="default">创建问卷</Button>
        <Button type={pathname.startsWith('/manage/list')?'primary':'default'} onClick={()=>nav('/manage/list')}>我的问卷</Button>
        <Button type={pathname.startsWith('/manage/star')?'primary':'default'} onClick={()=>nav('/manage/star')}>星际问卷</Button>
        <Button type={pathname.startsWith('/manage/trash')?'primary':'default'} onClick={()=>nav('/manage/trash')}>回收站</Button>
      </div>
      <div className={styles["manage-box-right"]}> 
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ManageLayout;
