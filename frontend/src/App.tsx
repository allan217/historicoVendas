import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./componentes/Header";
import SalesCard from "./componentes/salesCard";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <SalesCard />
    </>
  )
}

export default App;
