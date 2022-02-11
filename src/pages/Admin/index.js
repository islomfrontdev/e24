import AdminWrapper from "./AdminWrapper";
import PersistentDrawerLeft from "../../components/Drawer";

import Deliveried from "./deliveried";
import AddForm from "./Add/add";
import Statement from "./statement";
import Using from "./using";
import Statistic from "./statistic";
import { Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <>
      <AdminWrapper>
        <PersistentDrawerLeft  />
      </AdminWrapper>
    </>
  );
};

export default Admin;
