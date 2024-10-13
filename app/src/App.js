import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

import SignUp from './pages/Signup';
import Login from './pages/Login';
import OtpConfirmation from './pages/OtpConfirmation';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<Login />} />
      <Route path='otp/:userId' element={<OtpConfirmation />} />
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
