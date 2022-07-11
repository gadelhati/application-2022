import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoutes";
import { ProtectedRouteProps } from "./ProtectedRoutes";
import { List } from "./components/list/list";
import { AuthList } from "./components/auth/auth.list"
import { OMList } from "./components/om/om.list";
import { ObservationItem } from "./components/observation/observation.item";
import { ObservationListCoreUI } from "./components/observation/observation.list.coreui";
import { Profile } from "./components/auth/profile";
import { initialObservator } from "./components/observator/observator.initial";
import { SigninContainer } from "./components/auth/Signin";
import { Sidestrap } from "./containers/menus/SidebarBootstrap";
import { getUser } from "./services/service.token"

import "./AppRoutes.css"
import { UserList } from "./components/auth/user.list";

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
                        <Route path="/" element={getUser() === null ? <SigninContainer id="" username="" email="" password="" /> : <Navigate to="/list" />}></Route>
                        <Route path="/signin" element={getUser() === null ? <SigninContainer id="" username="" email="" password="" /> : <Navigate to="/list" />}></Route>
                        <Route path="/list" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<List id="" name="" />} />} />
                        <Route path="/users" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<UserList id="" username="" email="" password="" />} />} />
                        <Route path="/sidebar" element={<Sidestrap />}></Route>

                        <Route path="/omlist" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<OMList id="" name="" />} />} />
                        <Route path="/auth" element={<AuthList id="" username="" email="" password="" />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route path="/om" element={<OMList id="" name="" />}></Route>
                        <Route path="/observationitem" element={<ObservationItem />}></Route>
                        <Route path="/observationcoreui" element={<ObservationListCoreUI id="" mimi="" observator={initialObservator} />}></Route>
                    </Routes>
                </main>
            </BrowserRouter>
        </body>
    )
}