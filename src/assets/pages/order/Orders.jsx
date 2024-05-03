import "./orders.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


function Orders() {
  return (
    <div className="orders">
      <Sidebar />
      <div className="OrderContainer">
        <Navbar />
         
          <div className="center">
            hlmn order
          </div>
        </div>
    </div>
  );
}

export default Orders;