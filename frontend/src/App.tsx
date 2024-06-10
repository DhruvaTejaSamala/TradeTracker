import { Outlet } from 'react-router';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { UserProvider } from "./Context/useAuth";




function App() {
  
  return (
    <>
    <div className="dark:bg-gray-900">
    <UserProvider>
    <NavBar/>
    <Outlet />
    <ToastContainer />
    </UserProvider>
    </div>
    </>
  );
}

export default App;
