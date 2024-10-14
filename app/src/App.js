import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

import SignUp from './pages/Signup';
import Login from './pages/Login';
import OtpConfirmation from './pages/OtpConfirmation';
import Dashboard from './pages/dashboard/home/Dashboard';
import FlaggedTransactions from './pages/dashboard/flagged-transactions/FlaggedTransactions';
import VendorsList from './pages/dashboard/vendors/VendorsList';
import BiddingsHistory from './pages/dashboard/biddings/BiddingsHistory';
import Settings from './pages/dashboard/settings/Settings';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<Login />} />
      <Route path='otp/:userId' element={<OtpConfirmation />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='flagged-transactions' element={<FlaggedTransactions />}/>
        <Route path='vendors' element={<VendorsList />}/>
        <Route path='biddings' element={<BiddingsHistory />}/>
        <Route path='settings' element={<Settings />}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <div className="font-openSans">
        <RouterProvider router={router} />   
    </div>
  );
}

export default App;
