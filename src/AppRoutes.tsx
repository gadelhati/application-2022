import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoutes";
import { ProtectedRouteProps } from "./ProtectedRoutes";
import { OMList } from "./components/om/om.list";
import { Profile } from "./components/user/profile";
import { SigninContainer } from "./components/user/Signin";
import { Sidestrap } from "./containers/menus/SidebarBootstrap";
import { getUser } from "./services/service.token"

import "./AppRoutes.css"
import { UserList } from "./components/user/user.list";
import { ObservationList } from "./components/observation/observation.list";
import { ObservationUpload } from "./components/observation/observation.upload";
import { Header } from "./containers/menus/Header";
import { UserSignin } from "./components/user/user.signin";

export default function AppRoutes() {
    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
        isAuthenticated: getUser(),
        authenticationPath: '/signin',
    };
    return (
        <body>
            <BrowserRouter>
                <aside>
                    {getUser() && <Sidestrap />}
                </aside>
                <main>
                    <Routes>
                        <Route path="/" element={getUser() === null ? <SigninContainer id="" username="" email="" password="" /> : <Navigate to="/om" />}></Route>
                        <Route path="/signin" element={getUser() === null ? <SigninContainer id="" username="" email="" password="" /> : <Navigate to="/om" />}></Route>
                        <Route path="/signin2" element={getUser() === null ? <UserSignin id="" username="" email="" password="" /> : <Navigate to="/om" />}></Route>
                        <Route path="/om" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<OMList id="" name="" />} />} />
                        <Route path="/users" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<UserList id="" username="" email="" password="" />} />} />
                        <Route path="/profile" element={<Profile id="" username="" email="" password="" />}></Route>
                        <Route path="/observation" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ObservationList />} />} />
                        <Route path="/upload" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ObservationUpload />} />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </body>
    )
}