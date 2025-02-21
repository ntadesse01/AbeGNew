import { RouterProvider } from "react-router-dom";
import "./assets/css/bootstrap.css"
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import "./assets/css/color.css"
import "./App.css";
import { router } from "./router/router";
 

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
