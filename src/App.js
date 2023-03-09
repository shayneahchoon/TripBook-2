import React from "react";
import "./App.css";
import TimeLineEditPage from "@pages/TimeLineEditPage/TimeLineEditPage";
import TimeLinePage from "@pages/TimeLinePage/TimeLinePage";
import HomePage from "@pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@components/Navbar/Navbar";
import SelectEvent from "@components/Calendar/EditorOptions/SelectEvent/SelectEvent";
import Flight from "@components/Calendar/EditorOptions/Flight/Flight";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route element={<HomePage />}>
                <Route index element={<SelectEvent />} />
                <Route path="/flight" element={<Flight />} />
                <Route path="/accomodation" element={<SelectEvent />} />
              </Route>
              <Route path="/edit" element={<TimeLineEditPage />} />
              <Route path="/timeline" element={<TimeLinePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
