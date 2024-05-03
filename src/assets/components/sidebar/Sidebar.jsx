import React from 'react'
import { Link } from "react-router-dom";
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
  <div className="top">
    <Link to="/">
      <span className="logo">Store</span>
    </Link>
  </div>
  <hr />
  <div className="center">
    <ul>
      <p className="title">MAIN</p>
      <li>
        <DashboardIcon className='icon'/>
        <span>Dashboard</span>
      </li>
      <p className="title">LIST</p>
      <Link to="/users">
        <li>
        <AccountBoxIcon className='icon'/>
          <span>Users</span>
        </li>
      </Link>
     
      <Link to="/products">
        <li>
        <ProductionQuantityLimitsIcon className='icon'/>
          <span>Products</span>
        </li>
      </Link>
      
      < Link to="/orders">
      <li>
      <AddBusinessIcon className='icon'/>
        <span>Orders</span>
      </li>
      </Link>

      <Link to="/categories">
        <li>
        <CategoryIcon className='icon'/>
          <span>Categories</span>
        </li>
      </Link>
      <p className="title">USER</p>
      <li>
      <AccountCircleIcon className='icon'/>
        <span>Profile</span>
      </li>
      <li>
      <LogoutIcon className='icon'/>
        <span>Logout</span>
      </li>
    </ul>
  </div>
  <div className="bottom">
    <div className="colorOption"></div>
    <div className="colorOption"></div>
  </div>
</div>
  )
}

export default Sidebar