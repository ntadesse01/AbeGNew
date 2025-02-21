import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LogIn from "../pages/Login/LogIn";
import Services from "../pages/Services/Services";
import OrderDetail from "../pages/OrderDetail/OrderDetail";
import Contact from "../pages/Contact/Contact";
import AddCustomer from "../pages/Admin/AddCustomer"
import NewOrderStep1 from "../pages/Admin/Order/NewOrderStep1";
import NewOrderStep2 from "../pages/Admin/Order/NewOrderStep2";
import NewOrderStep3 from "../pages/Admin/Order/NewOrderStep3";
import NewOrderStep4 from "../pages/Admin/Order/NewOrderStep4";
import Orders from "../pages/Admin/Order/Orders";
import AddEmployee from "../pages/Admin/AddEmployee";
import AddVehicle from "../pages/Admin/AddVehicle";
import Admin from "../pages/Admin/Admin";
import Customers from "../pages/Admin/Customers";
import EmployeeEdit from "../pages/Admin/EmployeeEdit";
import Employees from "../pages/Admin/Employees";
import ServicesManage from "../pages/Admin/ServicesManage";
 
 
 

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/OrderDetail" element={<OrderDetail />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/AddCustomer" element={<AddCustomer />} />
      <Route path="/NewOrderStep1" element={<NewOrderStep1 />}/>
      <Route path="/NewOrderStep2" element={<NewOrderStep2 />}/>
      <Route path="NewOrderStep3" element={<NewOrderStep3 />}/>
      <Route path="NewOrderStep4" element={<NewOrderStep4 /> }/>
      <Route path="Orders" element={<Orders />}/>
      <Route path="AddCustomer" element={<AddCustomer />}/>
      <Route path="AddEmployee" element={<AddEmployee />}/>
      <Route path="AddVehicle" element={<AddVehicle />}/>
      <Route path="Admin" element={<Admin />}/>
      <Route path="CustomerEdit" element={<CustomerEdit />}/>
      <Route path="CustomerProfile" element={<CustomerProfile />}/>
      <Route path="Customers" element={<Customers />} />
      <Route path="EmployeeEdit" element={<EmployeeEdit />}/>
      <Route path="Employees" element={<Employees />}/>
      <Route path="ServicesManage" element={<ServicesManage />}/>
    </>
  )
);
