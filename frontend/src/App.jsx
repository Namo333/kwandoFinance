import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage"
import Page404 from "./pages/Page404";

const App = () =>{
  return(
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
