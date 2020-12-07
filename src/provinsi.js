import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from 'react-bootstrap'

const Provinsi = () => {
  const [prov, setProv] = useState([]);

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((res) => {
        setProv(res.data.data);
      });
  }, []);

  return (
    <div>

      provinsi
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {prov.map((items)=>{return(
            <tr>
            <td>{items.provinsi}</td>
          <td>{items.kasusPosi}</td>
          <td>{items.kasusSemb}</td>
          <td>{items.kasusMeni}</td>
          </tr>
          )
          }) }
          
        </tbody>
      </Table>
    </div>
  );
}

export default Provinsi;


