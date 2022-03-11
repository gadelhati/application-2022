import './App.css';
import { HeaderContainer } from "./containers/Header";
import AppRoutes from "./AppRoutes";
import { SidebarContainer } from './containers/Sidebar';
import Sidebar from './containers/menus/Sidebar';

// import "bootstrap/dist/css/bootstrap.min.css"
import "@coreui/coreui/dist/css/coreui.min.css"

export default function App() {
  return (
    <>
      <AppRoutes />
    </>
  )
}