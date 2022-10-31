import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import Home from "./components/Home";
import UpdateUser from "./components/UpdateUser";
import Root from "./layout/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch("http://localhost:5000/users"),
        },
        {
          path: "/add/user",
          element: <AddUser />,
        },
        {
          path: "/update/:id",
          element: <UpdateUser />,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/users/${params.id}`),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
