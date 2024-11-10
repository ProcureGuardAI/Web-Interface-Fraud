import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import SignUp from './pages/auth/Signup';
import OtpConfirmation from './pages/OtpConfirmation';
import Dashboard from './pages/dashboard/home/Dashboard';
import FlaggedTransactions from './pages/dashboard/flagged-transactions/FlaggedTransactions';
import VendorsList from './pages/dashboard/vendors/VendorsList';
import BiddingsHistory from './pages/dashboard/biddings/BiddingsHistory';
import Settings from './pages/dashboard/settings/Settings';
import Login from './pages/auth/Login';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div className="font-openSans">
        <Router>
          <Routes>
            <Route path='signup' element={<SignUp />} />
            <Route path='login' element={<Login />} />
            <Route path='otp/:userId' element={<OtpConfirmation />} />
            <Route path='/dashboard' element={<PrivateRoute component={Dashboard} />}>
              <Route path='flagged-transactions' element={<FlaggedTransactions />} />
              <Route path='vendors' element={<VendorsList />} />
              <Route path='biddings' element={<BiddingsHistory />} />
              <Route path='settings' element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;