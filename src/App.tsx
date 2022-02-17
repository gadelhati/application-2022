import { SidebarContainer } from "./containers/Sidebar";
import './App.css';
import { HeaderContainer } from "./containers/Header";
import AppRoutes from "./AppRoutes";
import { Repositories } from "./components/observation/Repositories";

export default function App() {
  return (
    <>
      <Repositories />
      <SidebarContainer />
      <HeaderContainer />
      <AppRoutes />
    </>
  )
}