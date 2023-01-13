import { Route, Routes } from "react-router-dom";
import "./App.css";
import TheSidebar from "./components/TheSidebar";
import TheTopNavbar from "./components/TheTopNavbar";
import BookingView from "./views/BookingView";
import DashboardView from "./views/DashboardView";

function App() {
  return (
    <div className="App">
      <TheSidebar />
      <TheTopNavbar />
      <Routes>
        <Route path="/" element={<DashboardView />} />
        <Route path="/booking" element={<BookingView />} />
      </Routes>
    </div>
  );
}

export default App;
