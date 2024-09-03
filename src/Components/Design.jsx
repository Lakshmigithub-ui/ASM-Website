import React from 'react';
import billing from "./Assets/billing.avif";


export const Design = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-bold mb-4">Billing Software</h2>
          <p className="mb-4">
            At ASM Infotech, we understand that efficient billing is crucial for any business. Our innovative billing software is designed to simplify invoicing, automate payments, and provide real-time insights, helping you manage your finances with ease and precision.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Automated Invoicing:</strong> Generate and send professional invoices with just a few clicks. Our software automates recurring invoices, reducing manual work and ensuring timely billing for your clients.</li>
            <li><strong>Customizable Templates:</strong> Choose from a variety of customizable templates to create invoices that match your brand’s identity. Personalize your invoices with your logo, colors, and preferred layout.</li>
            <li><strong>Multi-Currency and Multi-Language Support:</strong> Operate globally with ease. Our software supports multiple currencies and languages, allowing you to bill clients from different regions effortlessly.</li>
            <li><strong>Secure Online Payments:</strong> Accept payments online through integrated payment gateways. Offer your clients various payment options including credit/debit cards, bank transfers, and digital wallets for a seamless transaction experience.</li>
            <li><strong>Real-Time Tracking and Reporting:</strong> Monitor your financial health with real-time tracking of payments, outstanding invoices, and revenue reports. Our comprehensive dashboards provide insights into your billing performance and cash flow.</li>
            <li><strong>Expense Management:</strong> Keep track of your expenses alongside your income. Our software allows you to record and categorize expenses, helping you manage your budget more effectively.</li>
            <li><strong>Integration Capabilities:</strong> Seamlessly integrate with your existing accounting, CRM, and ERP systems. Our software supports various third-party integrations, ensuring a smooth workflow and data consistency.</li>
            <li><strong>Automated Reminders and Notifications:</strong> Reduce overdue payments with automated reminders and notifications. Our system sends reminders to clients about upcoming or overdue invoices, helping you maintain a steady cash flow.</li>
            <li><strong>User-Friendly Interface:</strong> Enjoy an intuitive and easy-to-navigate interface designed for users of all technical levels. Our software simplifies complex billing tasks, making it accessible to everyone in your organization.</li>
            <li><strong>Dedicated Support:</strong> Our knowledgeable support team is here to assist you. Whether you need help with setup, troubleshooting, or optimizing features, we provide prompt and effective support to ensure your satisfaction.</li>
          </ul>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2">
          <img src={billing} alt="Billing Software" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Efficiency:</strong> Save time and reduce errors with automated billing and payment processes.</li>
          <li><strong>Flexibility:</strong> Adapt to your business needs with customizable features and integrations.</li>
          <li><strong>Reliability:</strong> Trust in a secure, robust system that ensures accurate and timely invoicing.</li>
          <li><strong>Scalability:</strong> Grow your business with a solution that scales with your needs, from small startups to large enterprises.</li>
        </ul>
      </div>
    </div>
  );
};
