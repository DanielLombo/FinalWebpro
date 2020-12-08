import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

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
      Jumlah Kasus seluruh Indonesia
      <h2>positif {corona.positif}</h2>
      <h2>sembuh {corona.sembuh}</h2>
      <h2>meninggal {corona.meninggal}</h2>
    </div>
  );
}

export default Global;
