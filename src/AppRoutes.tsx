import { Route, BrowserRouter, Routes } from "react-router-dom";

import { AppButton } from "./containers/App.Button";
import AvatarDemo from "./components/doc/AvatarDemo";
import CheckboxDemo from "./components/doc/CheckboxDemo";
import LabelDemo from "./components/doc/LabelDemo";
import { Observation } from "./components/observation/Observation";
import { ObservationList } from "./components/observation/Observation.List";
import { Observator } from "./components/observation/Observator";
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
import { AuthItem } from "./components/auth/auth.item";
import { OM2 } from "./components/OM2";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/observation" element={<Observation mimi="vixi" />}></Route>
                <Route path="/list" element={<ObservationList />}></Route>
                <Route path="/observator" element={<Observator id="" />}></Route>
                <Route path="/auth" element={<AuthItem />}></Route>

                <Route path="/om2" element={<OM2 />}></Route>
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

                <Route path="/button" element={<AppButton/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}