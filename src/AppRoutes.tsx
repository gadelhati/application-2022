import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoutes";
import { ProtectedRouteProps } from "./ProtectedRoutes";
import { List } from "./components/list/list";
import { AuthList } from "./components/auth/auth.list"
import { OMList } from "./components/om/om.list";
import { ObservationItem } from "./components/observation/observation.item";
// import { ObservationList } from "./components/observation/observation.list";
import { ObservationListCoreUI } from "./components/observation/observation.list.coreui";
import { initialOM } from "./components/om/om.initial";
import { Profile } from "./components/auth/profile";
import { initialObservator } from "./components/observator/observator.initial";
import { SigninContainer } from "./containers/Signin";
import { Sidestrap } from "./containers/menus/SidebarBootstrap";
import { getUserName, getLocalAccessToken, getId, getEmail, getUser } from "./services/service.token"
import { Signup } from "./containers/Signup";

export default function AppRoutes() {
    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
        isAuthenticated: getUser(),
        authenticationPath: '/signin',
    };
    return (
        <BrowserRouter>
            <div className="row">
                {/* justify-content-center */}
                <div className="col-4">
                    {getUser() && <Sidestrap />}
                </div>
                <div className="col-8">
                    <Routes>
                        <Route path="/" element={getUser() === null ? <SigninContainer username="" email="" password="" /> : <Navigate to="/list" />}></Route>
                        <Route path="/signin" element={getUser() === null ? <SigninContainer username="" email="" password="" /> : <Navigate to="/list" />}></Route>
                        <Route path="/list" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<List id="" name="" />} />} />
                        <Route path="/signup" element={<Signup username="" email="" password="" />}></Route>
                        <Route path="/sidebar" element={<Sidestrap />}></Route>

                        <Route path="/omlist" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<OMList id="" name="" />} />} />
                        <Route path="/auth" element={<AuthList username="" email="" password="" />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route path="/om" element={<OMList id="" name="" />}></Route>
                        <Route path="/observationitem" element={<ObservationItem />}></Route>
                        <Route path="/observationcoreui" element={<ObservationListCoreUI id="" mimi="" observator={initialObservator} />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}