import { Route, BrowserRouter, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoutes";
import { ProtectedRouteProps } from "./ProtectedRoutes";
import { List } from "./components/list/list";

import { AppButton } from "./containers/App.Button";
import AvatarDemo from "./components/doc/AvatarDemo";
import CheckboxDemo from "./components/doc/CheckboxDemo";
import LabelDemo from "./components/doc/LabelDemo";
import AccordionDemo from "./components/doc/AccordionDemo";
import AlertDialogDemo from "./components/doc/AlertDialogDemo";
// import AspectRatioDemo from "./components/doc/AspectRatioDemo";
import CollapsibleDemo from "./components/doc/CollapsibleDemo";
import ContextMenuDemo from "./components/doc/ContextMenuDemo";
import DialogDemo from "./components/doc/DialogDemo";
import DropdownMenuDemo from "./components/doc/DropdownMenuDemo";
import HoverCardDemo from "./components/doc/HoverCardDemo";
import PopoverDemo from "./components/doc/PopoverDemo";
import ProgressDemo from "./components/doc/ProgressDemo";
import RadioGroupDemo from "./components/doc/RadioGroupDemo";
import ScrollAreaDemo from "./components/doc/ScrollAreaDemo";
import SeparatorDemo from "./components/doc/SeparatorDemo";
import SliderDemo from "./components/doc/SliderDemo";
import SwitchDemo from "./components/doc/SwitchDemo";
import TabsDemo from "./components/doc/TabsDemo";
import TooltipDemo from "./components/doc/TooltipDemo";
import ToggleDemo from "./components/doc/ToogleDemo";
// import ToggleGroupDemo from "./components/doc/ToogleGroupDemo";
import ToolbarDemo from "./components/doc/ToolBarDemo";
import { AuthList } from "./components/auth/auth.list"
import { OMList } from "./components/om/om.list";
import { ObservationItem } from "./components/observation/observation.item";
// import { ObservationList } from "./components/observation/observation.list";
import { ObservationListCoreUI } from "./components/observation/observation.list.coreui";
import { initialOM } from "./components/om/om.initial";
import { Profile } from "./components/auth/profile";
import { initialObservator } from "./components/observator/observator.initial";

import { Overview, Users, Revenue, Order, History, Configurations } from "./containers/pages/Overview";
import { Sidebar } from "./containers/menus/Sidebar";
import { FormList } from "./components/form/form.list";
import { InputGroup } from "./containers/htmlcss/InputGroup";
import { SigninContainer } from "./containers/Signin";
import { Sidestrap } from "./containers/menus/SidebarBootstrap";
import { getUserName, getLocalAccessToken, getId, getEmail, getUser } from "./services/service.token"

export default function AppRoutes() {
    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
        isAuthenticated: getUser(),
        authenticationPath: '/signin',
    };
    return (
        <BrowserRouter>
            {/* <Sidebar /> */}
            {/* <Sidestrap /> */}
            <Routes>
                <Route path="/list" element={<List id="" name="" />}></Route>


                <Route path="/omlist" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<OMList id="" name="" />} />} />
                <Route path="/auth" element={<AuthList om={initialOM} username="" email="" password="" />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/om" element={<OMList id="" name="" />}></Route>
                {/* <Route path="/observation" element={<ObservationList id="" mimi="" observator={initialObservator} />}></Route> */}
                <Route path="/observationitem" element={<ObservationItem />}></Route>
                <Route path="/observationcoreui" element={<ObservationListCoreUI id="" mimi="" observator={initialObservator} />}></Route>
                <Route path="/signin" element={<SigninContainer  om={initialOM} username="" email="" password="" />}></Route>
                <Route path="/sidebar" element={<Sidestrap />}></Route>
                
                <Route path="/formlist" element={<FormList om={initialOM} username="" email="" password="" />} ></Route>
                <Route path="/inputgroup" element={<InputGroup />} ></Route>
                <Route path="/overview" element={<Overview />} ></Route>
                <Route path="/overview/users" element={<Users />} ></Route>
                <Route path="/overview/revenue" element={<Revenue />} ></Route>
                <Route path="/order" element={<Order />} ></Route>
                <Route path="/history" element={<History />} ></Route>
                <Route path="/configurations" element={<Configurations />} ></Route>

                <Route path="/accordion" element={<AccordionDemo />}></Route>
                <Route path="/alert" element={<AlertDialogDemo />}></Route>
                {/* <Route path="/aspect" element={<AspectRatioDemo />}></Route> */}
                <Route path="/avatar" element={<AvatarDemo />}></Route>
                <Route path="/checkbox" element={<CheckboxDemo />}></Route>
                <Route path="/collapsible" element={<CollapsibleDemo />}></Route>
                <Route path="/context" element={<ContextMenuDemo />}></Route>
                <Route path="/dialog" element={<DialogDemo />}></Route>
                <Route path="/dropdown" element={<DropdownMenuDemo />}></Route>
                <Route path="/hover" element={<HoverCardDemo />}></Route>
                <Route path="/label" element={<LabelDemo />}></Route>
                <Route path="/popover" element={<PopoverDemo />}></Route>
                <Route path="/progress" element={<ProgressDemo />}></Route>
                <Route path="/radio" element={<RadioGroupDemo />}></Route>
                <Route path="/scrool" element={<ScrollAreaDemo />}></Route>
                <Route path="/separator" element={<SeparatorDemo />}></Route>
                <Route path="/slider" element={<SliderDemo />}></Route>
                <Route path="/switch" element={<SwitchDemo />}></Route>
                <Route path="/tabs" element={<TabsDemo />}></Route>
                <Route path="/tooltip" element={<TooltipDemo />}></Route>
                <Route path="/toogle" element={<ToggleDemo />}></Route>
                {/* <Route path="/tooglegroup" element={<toogleGroupDemo />}></Route> */}
                <Route path="/toolbar" element={<ToolbarDemo />}></Route>

                <Route path="/button" element={<AppButton />}></Route>
            </Routes>
        </BrowserRouter>
    )
}