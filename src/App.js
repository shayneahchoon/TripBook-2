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
import FlightSummary from "@components/Calendar/EditorOptions/Flight/FlightSummary";
import SaveFlight from "@components/Calendar/EditorOptions/Flight/SaveFlight";
import { Provider } from "react-redux";
import store from "./redux/Store";
import defaultLoader from "./Routes/Loaders/FlightLoader";
import saveLoader from "./Routes/Loaders/SaveLoader";
import accomodationLoader from "./Routes/Loaders/AccomodationLoader";
import Accomodation from "@components/Calendar/EditorOptions/Accomodation/Accomodation";
import AccomodationSummary from "@components/Calendar/EditorOptions/Accomodation/AccomodationSummary";
import SaveAccomodation from "@components/Calendar/EditorOptions/Accomodation/SaveAccomodation";


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
            path: "flight_summary",
            loader: defaultLoader,
            element: <FlightSummary />,
          },
          {
            path: "save_flight",
            loader: saveLoader,
            element: <SaveFlight />,
          },
          {
            path: "add_accomodation",
            element: <Accomodation />,
          },
          {
            path: "accomodation_summary",
            loader: accomodationLoader,
            element: <AccomodationSummary />,
          },
          {
            path: "save_accomodation",
            loader: accomodationLoader,
            element: <SaveAccomodation />,
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
