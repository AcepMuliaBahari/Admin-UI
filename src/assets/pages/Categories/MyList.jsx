import React from 'react'
import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import MyDatatable from '../../components/Mydatatable/MyDatatable';

const MyList = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
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