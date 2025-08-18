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
import AddCustomer from "../pages/Admin/AddCustomer";
import NewOrderStep1 from "../pages/Admin/Order/NewOrderStep1";
import NewOrderStep2 from "../pages/Admin/Order/NewOrderStep2";
import NewOrderStep3 from "../pages/Admin/Order/NewOrderStep3";
import NewOrderStep4 from "../pages/Admin/Order/NewOrderStep4";
import Orders from "../pages/Admin/Order/Orders";
import AddEmployee from "../pages/Admin/AddEmployee";
import AddVehicle from "../pages/Admin/AddVehicle";
// import Admin from "../pages/Admin/Admin";
import Customers from "../pages/Admin/Customers";
import EmployeeEdit from "../pages/Admin/EmployeeEdit";
import Employees from "../pages/Admin/Employees";
import ServicesManage from "../pages/Admin/ServicesManage";
import About from "../pages/About/About";
import PublicLayout from "../layout/PublicLayout";
import PrivateLayout from "../layout/PrivateLayout";
import CustomerEdit from "../pages/Admin/CustomerEdit"
import CustomerProfile from "../pages/Admin/CustomerProfile"
import DashBoard from "../pages/Admin/DashBoard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<><PublicLayout/></>}>

        {/*PrivateLayout /Suitable if only non-logged-in users should access these pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/services" element={<Services />} />
        <Route path="/order-detail" element={<OrderDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      {/* PublicLayout/Clearly defines that these routes are for signed-in users */}
      <Route path="/" element={<><PrivateLayout/></>}>
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/new-order-step1" element={<NewOrderStep1 />} />
        <Route path="/new-order-step2" element={<NewOrderStep2 />} />
        <Route path="/new-order-step3" element={<NewOrderStep3 />} />
        <Route path="/new-order-step4" element={<NewOrderStep4 />} />
        <Route path="/orders" element={<Orders />} />
        {/* <Route path="/add-customer" element={<AddCustomer />} /> */}
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/add-vehicle" element={<AddVehicle />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/customer_Edit" element={<CustomerEdit />}/>
        <Route path="/customer_Profile" element={<CustomerProfile />}/>
        <Route path="/customers" element={<Customers />} />
        <Route path="/employee-edit" element={<EmployeeEdit />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/services-manage" element={<ServicesManage />} />
      </Route>
      {/* AdminRoutes/If they handle customer/service/employee management */}
    </>
  )
);
