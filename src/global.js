import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup } from 'react-bootstrap';

const Global = () => {
  const [corona, setCorona] = useState({ positif: NaN, meninggal: NaN, sembuh: NaN })

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        setCorona({
          positif: res.data.confirmed.value,
          meninggal: res.data.deaths.value,
          sembuh: res.data.recovered.value
        });
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      jumlah Kasus seluruh Dunia
    <Card bg = "secondary" style = {{ width : '20rem', paddingRight : '0.25rem',paddingTop : '0.50rem', paddingBottom : '0.50rem'}}>
    <ListGroup variant = "flush">
  <ListGroup.Item>positif : { corona.positif}</ListGroup.Item>
  <ListGroup.Item>sembuh : { corona.sembuh}</ListGroup.Item>
  <ListGroup.Item>meninggal : { corona.meninggal}</ListGroup.Item>

    </ListGroup>

    </Card>
   
    </div >
  );
}


export default Global;
