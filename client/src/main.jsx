import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App.jsx"
import FormPage from "./pages/FormPage.jsx"
import CapturePage from "./pages/CapturePage.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<FormPage />} />
        <Route path="/capture" element={<CapturePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
