import React, { useState } from 'react';
import Links from "./Links";
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import Mobilefooter from "../Mobile/Mobilefooter";
import "./Filter.css";
// import Farms from '../folder/Farms';
// import Cardlinks from '../Card/Cardlinks';

const Filter = () => {
    const [Selectedfilter, setSelectedfilter] = useState("")
    // const [Change, setChange] = useState(Cardlinks)
    return (
        <div>
            <div className='filter-container'>
                <div className='trial'>
                    <Navbar />
                    <div className='container'>
                        {Links.map((item, i) => (
                            <div key={i} className={`small-container ${i == Selectedfilter && "selected-box"}`}
                                onClick={() => {
                                    setSelectedfilter(i)
                                    console.log(i)
                                    // setChange(Farms)
                                    // console.log("This is new", { Change })
                                    // console.log(item.label)
                                }}>
                                <img src={item.image} alt="icon" />
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Card />
            <Mobilefooter />
        </div>
    )
}
export default Filter;