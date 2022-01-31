import { useState } from "react";
import AppRoutes from "./AppRoutes";
import { Stitches } from "./components/Stitches";

export default function App() {
  return (
    <>
      <Stitches/>
      <AppRoutes/>
    </>
  )
}