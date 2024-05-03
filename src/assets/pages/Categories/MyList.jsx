import React from 'react'
import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import MyDatatable from '../../components/mydatatable/MyDatatable';

const MyList = () => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="MyListContainer">
        <Navbar />
          <div className="widgets">
          <Widget type= "user" />
          <Widget type= "order"/>
          <Widget type= "earning" />
          <Widget type= "balance" />
          </div>
          <MyDatatable />
          
        </div>
    </div>
  )
}

export default MyList