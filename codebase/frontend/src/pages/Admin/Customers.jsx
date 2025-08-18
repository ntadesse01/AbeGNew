import React, { useState } from 'react';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomers, setSelectedCustomers] = useState({});

  const customers = [
    { id: 1, firstName: 'Abebe', lastName: 'Beyene', email: 'abebe@example.com', phone: '123-456-7890', addedDate: '2023-01-01', active: 'Yes' },
    { id: 2, firstName: 'Jemal', lastName: 'Hussein', email: 'jemal@example.com', phone: '234-567-8901', addedDate: '2023-01-05', active: 'Yes' },
    { id: 3, firstName: 'Tadesse', lastName: 'Negash', email: 'tadesse@example.com', phone: '345-678-9012', addedDate: '2023-01-10', active: 'No' },
    { id: 4, firstName: 'Marta', lastName: 'Kebede', email: 'marta@example.com', phone: '456-789-0123', addedDate: '2023-01-15', active: 'Yes' },
    { id: 5, firstName: 'Selam', lastName: 'Tesfaye', email: 'selam@example.com', phone: '567-890-1234', addedDate: '2023-01-20', active: 'Yes' },
    { id: 6, firstName: 'Girma', lastName: 'Ayele', email: 'girma@example.com', phone: '678-901-2345', addedDate: '2023-01-25', active: 'No' },
    { id: 7, firstName: 'Hana', lastName: 'Biruk', email: 'hana@example.com', phone: '789-012-3456', addedDate: '2023-01-30', active: 'Yes' },
    { id: 8, firstName: 'Kebede', lastName: 'Zewdu', email: 'kebede@example.com', phone: '890-123-4567', addedDate: '2023-02-04', active: 'Yes' },
    { id: 9, firstName: 'Lily', lastName: 'Tadesse', email: 'lily@example.com', phone: '901-234-5678', addedDate: '2023-02-09', active: 'No' },
    { id: 10, firstName: 'Mulu', lastName: 'Abdalla', email: 'mulu@example.com', phone: '012-345-6789', addedDate: '2023-02-14', active: 'Yes' },
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const handleCheckboxChange = (id, checkboxIndex) => {
    setSelectedCustomers(prevState => ({
      ...prevState,
      [`${id}-${checkboxIndex}`]: !prevState[`${id}-${checkboxIndex}`],
    }));
  };

  return (
    <div className="auto-container">
      <div className="contact-title">
        <h2>Customers</h2>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for a customer using first name, last name, email address, or phone number"
            className="border border-gray-300 p-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">First Name</th>
              <th className="py-3 px-6 text-left">Last Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Added Date</th>
              <th className="py-3 px-6 text-left">Active</th>
              <th className="py-3 px-6 text-left">Edit</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredCustomers.slice(0, 29).map((customer) => (
              <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{customer.id}</td>
                <td className="py-3 px-6 text-left">{customer.firstName}</td>
                <td className="py-3 px-6 text-left">{customer.lastName}</td>
                <td className="py-3 px-6 text-left">{customer.email}</td>
                <td className="py-3 px-6 text-left">{customer.phone}</td>
                <td className="py-3 px-6 text-left">{customer.addedDate}</td>
                <td className="py-3 px-6 text-left">{customer.active}</td>
                <td className="py-3 px-6 text-left">
                  <input
                    type="checkbox"
                    checked={!!selectedCustomers[`${customer.id}-1`]}
                    onChange={() => handleCheckboxChange(customer.id, 1)}
                    className="mr-2"
                  />
                  <input
                    type="checkbox"
                    checked={!!selectedCustomers[`${customer.id}-2`]}
                    onChange={() => handleCheckboxChange(customer.id, 2)}
                    className="mr-2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;