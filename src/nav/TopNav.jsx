import { useSelector } from "react-redux";
import "./TopNav.css";
import { Link } from "react-router-dom";

function TopNavigation() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems?.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="container">
      <nav className="nav">
        <img
          src={"src/assets/react.svg"}
          className="logo react"
          alt="React logo"
        />
        <div className="list">
          <Link to={"/list"}>List</Link>
          <Link to={"/form"}>Create</Link>
          <Link to={"/card"}>View</Link>
          <Link to={"/cart"}>
            Cart {cartItems?.length > 0 ? `- (${totalQuantity})` : ""}
          </Link>
          <Link to={"/student"}>Student List</Link>
          <Link to={"/carList"}>Car List</Link>
        </div>
      </nav>
    </div>
  );
}

export default TopNavigation;
