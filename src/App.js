import React, { useState } from 'react';
import InvoiceForm from './InvoiceForm';
import GenerateInvoice from './GenerateInvoice';
import './InvoiceForm.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  const handleFormSubmit = (data) => {
    setInvoiceData(data);
  };
console.log(invoiceData)
  return (
    <div>
      <InvoiceForm onSubmit={handleFormSubmit} />
      {invoiceData && <GenerateInvoice {...invoiceData} />}
      <ToastContainer />
    </div>
  );
};

export default App;
