import React from "react";

import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Card from "./components/Card";

import personPhoto from "./images/person.png"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <div className="card--container">
                <Card 
                    img = {personPhoto}
                    rating = {5.0}
                    reviewCount = {6}
                    country = "USA"
                    title = "Life lessons with Katie Zaferes"
                    price = {136}
                />
            </div>
        </div>
    )
}
