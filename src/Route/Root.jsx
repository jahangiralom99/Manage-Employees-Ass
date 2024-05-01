import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AdvancedTable from "../pages/AdvancedTable/AdvancedTable";
import Validation from "../pages/Validation/Validation";
import BasicElements from "../pages/BasicElements/BasicElements";
import Departments from "../pages/Departments/Departments";
import Deaignations from "../pages/Designations/Deaignations";
import TimeSheets from "../pages/TimeSheets/TimeSheets";
const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "advanced-table",
        element: <AdvancedTable />,
      },
      {
        path: "basic-elements",
        element: <BasicElements />,
      },
      {
        path: "validation",
        element: <Validation />,
      },
      {
        path: "departments",
        element: <Departments />,
      },
      {
        path: "designations",
        element: <Deaignations/>
      },
      {
        path: "Time-sheet",
        element: <TimeSheets/>
      }
    ],
  },
]);

export default Root;
