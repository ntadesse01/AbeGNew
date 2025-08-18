import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="w-64 p-4 bg-blue-950 border-r border-blue-900 h-screen">
      {/* Sidebar Title */}
      <h2 className="text-white text-lg font-bold mb-4">Admin Menu</h2>
      {/* Sidebar Navigation */}
      <ul className="space-y-2">
        <li className="active">
          <Link to="/dashboard" className="block p-2 text-white hover:bg-blue-800" aria-label="Dashboard">Dashboard</Link>
        </li>
        <li className="border-b border-blue-700 pb-2">
          <Link to="/orders" className="block p-2 text-white hover:bg-blue-800" aria-label="Orders">Orders</Link>
        </li>
        <li className="border-b border-blue-700 pb-2">
          <Link to="/new-order-step1" className="block p-2 text-white hover:bg-blue-800" aria-label="New Order">New Order</Link>
        </li>
        <li className="border-b border-blue-700 pb-2">
          <Link to="/add-employee" className="block p-2 text-white hover:bg-blue-800" aria-label="Add Employee">Add Employee</Link>
        </li>
        <li>
          <Link to="/employees" className="block p-2 text-white hover:bg-blue-800" aria-label="Employees">Employees</Link>
        </li>
        <li>
          <Link to="/add-customer" className="block p-2 text-white hover:bg-blue-800" aria-label="Add Customers">Add Customers</Link>
        </li>
        <li>
          <Link to="/customers" className="block p-2 text-white hover:bg-blue-800" aria-label="Customers">Customers</Link>
        </li>
        <li>
          <Link to="/services-manage" className="block p-2 text-white hover:bg-blue-800" aria-label="Services">Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;