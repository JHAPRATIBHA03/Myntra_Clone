import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FetchItems from "../Components/fetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems></FetchItems>
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet></Outlet>}
      <Footer />
    </>
  );
}
export default App;
