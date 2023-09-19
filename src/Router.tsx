import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import AboutUs from "./pages/AboutUs";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/procedures" element={<Procedures />}>
          <Route index element={<ProceduresList />}/>
          <Route path="procedure/:id" element={<Procedure />}/>
        </Route> */}
      </Route>
    </Routes>
  )
}