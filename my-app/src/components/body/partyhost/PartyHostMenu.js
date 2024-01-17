import { useContext } from "react";
// import { Data } from "../../Body";
import { Menu } from "antd";
import {
  HomeFilled,
  SolutionOutlined,
  UserOutlined,
  TeamOutlined,
  BookOutlined,
  GlobalOutlined,
  ProfileOutlined,
  LogoutOutlined, 
  CheckCircleOutlined,
  MoneyCollectOutlined
} from "@ant-design/icons";
// import { useLogOut } from "../../../../Hooks/All/useLogout";

export const AdminMenu = () => {
  //Get data from app.js
//   const { menuOpt, setMenuOpt } = useContext();
//   const LogOutBtn = useLogOut();
  //Item for menu
  const menuItems = [
    { label: "Dashboard", icon: <HomeFilled />, key: "adminDashboard" },
    { label: "Revenue", icon: <MoneyCollectOutlined />, key: "majorsManage" },
    { label: "Decentralization", icon: <CheckCircleOutlined  />, key: "subjectsManage" },
    {
      label: "Profile",
      key: null,
      children: [
        { label: "Customers", icon: <TeamOutlined />, key: "customerManage" },
        { label: "Party Host", icon: <UserOutlined />, key: "partyhostManage" },
      ],
      type: "group",
    },
  ];
  //selectedKeys
  return (
    <span>
      <Menu
        mode="inline"
        items={menuItems}
        defaultSelectedKeys="lecturerDashboard"
        // selectedKeys={menuOpt}
        // onClick={(selectedOpt) => {
        //   setMenuOpt(selectedOpt.key);
        // }}
      />

      {/* Logout Btn */}
      <LogoutOutlined  />
    </span>
  );
};
