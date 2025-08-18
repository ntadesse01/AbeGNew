import React from 'react';

const Employees = () => {
  const employees = [
    {
      id: 1,
      firstName: 'Mihirete',
      lastName: 'Tigistu',
      email: 'test.employee@example.com',
      phone: '123-456-7890',
      addedDate: '2023-01-01',
      role: 'Employee',
      isActive: true,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      phone: '234-567-8901',
      addedDate: '2023-01-05',
      role: 'Manager',
      isActive: false,
    },
    {
      id: 1,
      firstName: 'Tomas',
      lastName: 'Roberto',
      email: 'test.employee@example.com',
      phone: '123-456-7890',
      addedDate: '2023-01-01',
      role: 'Employee',
      isActive: true,
    },
    {
      id: 2,
      firstName: 'Nate',
      lastName: 'kebede',
      email: 'jane.doe@example.com',
      phone: '234-567-8901',
      addedDate: '2023-01-05',
      role: 'Manager',
      isActive: false,
    },
    // Add more employees as needed
  ];

  return (
    <div className="auto-container">
      <div className="contact-title">
        <h2>Employees</h2>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Is Active</th>
            <th className="py-3 px-6 text-left">First Name</th>
            <th className="py-3 px-6 text-left">Last Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Phone</th>
            <th className="py-3 px-6 text-left">Added Date</th>
            <th className="py-3 px-6 text-left">Role</th>
            <th className="py-3 px-6 text-left">Edit</th>
            <th className="py-3 px-6 text-left">Delete</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">
                <div className="flex flex-col items-start">
                  <input type="checkbox" defaultChecked={employee.isActive} />
                  <span>{employee.isActive ? 'Yes' : 'No'}</span>
                  <span>{employee.isActive ? 'Active' : 'Inactive'}</span>
                  <span>{employee.isActive ? 'Available' : 'Not Available'}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">{employee.firstName}</td>
              <td className="py-3 px-6 text-left">{employee.lastName}</td>
              <td className="py-3 px-6 text-left">{employee.email}</td>
              <td className="py-3 px-6 text-left">{employee.phone}</td>
              <td className="py-3 px-6 text-left">{employee.addedDate}</td>
              <td className="py-3 px-6 text-left">{employee.role}</td>
              <td className="py-3 px-6 text-left">
                <button className="text-blue-500">Edit</button>
              </td>
              <td className="py-3 px-6 text-left">
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;