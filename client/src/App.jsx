import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>🧾 Form Capture App</h2>
      <Outlet />
    </div>
  )
}
