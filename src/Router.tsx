import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RequestAccountDeletion from './pages/RequestAccountDeletion';

// Configuration for different apps
// const appConfig = {
//   gather: {
//     name: "Gather",
//     // Additional app-specific configurations can go here
//   },
//   // Add more apps here as needed
//   // Example:
//   // clubkit: {
//   //   name: "Clubkit",
//   //   // Additional app-specific configurations can go here
//   // },
// };

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* Specific routes for Gather app */}
      <Route path="/app/gather/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/app/gather/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/app/gather/request-account-deletion" element={<RequestAccountDeletion />} />
      {/* Dynamic routes for any app - these will use the same components but could be enhanced to pass app-specific data */}
      <Route path="/app/:appName/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/app/:appName/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/app/:appName/request-account-deletion" element={<RequestAccountDeletion />} />
      {/* Redirect any other route to the main app */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RouterComponent;