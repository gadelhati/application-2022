import { SidebarContainer } from "./containers/Sidebar";
import './App.css';
import { HeaderContainer } from "./containers/Header";
import AppRoutes from "./AppRoutes";
import { OMList } from "./components/observation/om.list";

export default function App() {
  return (
    <>
      <OMList id="" name="" />
      <SidebarContainer />
      {/* <HeaderContainer /> */}
      <AppRoutes />
    </>
  )
}