import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useFetch } from "./components/useFetch";


export default function App() {

  const { data: cards, isPending, error } = useFetch(`http://localhost:8000/cards/`)


  return (
      <div className="wrapper">
        <Header />

        <div>
           <h2>{ cards.title }</h2>
        </div>

        <Footer />
      </div>
  )
}
