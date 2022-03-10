import './App.css';
import { HeaderContainer } from "./containers/Header";
import AppRoutes from "./AppRoutes";
import { SidebarCoreUI } from './containers/coreui';
import { SidebarContainer } from './containers/Sidebar';
import Sidebar from './containers/menus/Sidebar';
import { Side } from './containers/side';

export default function App() {
  return (
    <>
      <AppRoutes />
    </>
  )
}