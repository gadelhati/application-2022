import { SidebarContainer } from "./containers/Sidebar";
import './App.css';
import { HeaderContainer } from "./containers/Header";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <>
      <SidebarContainer />
      <HeaderContainer />
      <AppRoutes />
    </>
  )
}