import React from "react";
import "./App.css";
import TimeLineEditPage from "@pages/TimeLineEditPage/TimeLineEditPage";
import TimeLinePage from "@pages/TimeLinePage/TimeLinePage";
import HomePage from "@pages/HomePage/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "@components/Navbar/Navbar";
import SelectEvent from "@components/Calendar/EditorOptions/SelectEvent/SelectEvent";
import Flight, {
  FLIGHT_TYPES,
} from "@components/Calendar/EditorOptions/Flight/Flight";
import SaveFlight from "@components/Calendar/EditorOptions/Flight/SaveFlight";
import { Provider } from "react-redux";
import store from "./redux/Store";
import defaultLoader from "./Routes/Loaders/FlightLoader";


const CustomBrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        element: <HomePage />,
        path: "",
        children: [
          {
            path: "",
            element: <SelectEvent />,
          },
          {
            path: "direct_departure",
            loader: defaultLoader,
            element: <Flight type={FLIGHT_TYPES.DIRECT_DEPARTURE} />,
          },
          {
            path: "direct_arrival",
            loader: defaultLoader,
            element: <Flight type={FLIGHT_TYPES.DIRECT_ARRIVAL} />,
          },
          {
            path: "connecting_arrival",
            loader: defaultLoader,
            element: <Flight type={FLIGHT_TYPES.CONNECTING_ARRIVAL} />,
          },
          {
            path: "save_flight",
            loader: defaultLoader,
            element: <SaveFlight />,
          },
        ],
      },
      {
        path: "edit",
        element: <TimeLineEditPage />,
      },
      {
        path: "timeline",
        element: <TimeLinePage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={CustomBrowserRouter} />
      </Provider>
    </div>
  );
}

export default App;
