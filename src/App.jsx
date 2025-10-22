import React, {useState, useEffect} from 'react';
import './App.css';
import Button from './Components/button';

function App() {
  //kiri => getter
  //kanan => setter
  const [pacarSaya, setPacarSaya] = useState(0)
  const [namaPacar, setNamaPacar] = useState("")
  
  useEffect (() => {
    if (pacarSaya < 0) {
    setPacarSaya(0)
  }
  },[pacarSaya])

  useEffect(() => {
    pacarSaya  > 0 ? setNamaPacar("dhinta") : setNamaPacar("mipan") 
  },[pacarSaya])

  return (
    <>
      <h1>jumlah pacar saya : {pacarSaya}</h1>
      <Button pacar={() => {setPacarSaya((prev) => prev +1 )}} title = "tambah"/>
      <Button pacar={() => {setPacarSaya((prev) => prev -1 )}} title= "kurang"/>
      <h2>{namaPacar}</h2>
    </>

    )
}

export default App;
