import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup } from 'react-bootstrap';


const Indo =()=> {
  const [indonesia, setIndonesia] = useState({ positif: NaN, meninggal: NaN, sembuh: NaN })

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) => {
        setIndonesia(
          {
            positif: res.data.jumlahKasus,
            meninggal: res.data.meninggal,
            sembuh: res.data.sembuh
          })
      })
      .catch((err) => console.log(err))
  })
  return (
    <div>
    jumlah Kasus seluruh indonesia
  <Card bg = "secondary"  style = {{ width : '20rem', paddingRight : '0.25rem',paddingTop : '0.50rem', paddingBottom : '0.50rem'}}>
  <ListGroup variant = "flush">
<ListGroup.Item>positif : { indonesia.positif}</ListGroup.Item>
<ListGroup.Item>sembuh : { indonesia.sembuh}</ListGroup.Item>
<ListGroup.Item>meninggal : { indonesia.meninggal}</ListGroup.Item>

  </ListGroup>

  </Card>
 
  </div >
  );
}

export default Indo;
