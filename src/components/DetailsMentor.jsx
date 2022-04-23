import "./details.css"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom"
import { Navbar } from "./Navbar";


export const DetailsOfMentor = () => {
    let {id} = useParams();

    const [data, setData] = useState({});
    
    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        let res = await fetch(`https://mento-clone.herokuapp.com/posts/${id}`);
        let d = await res.json();
        setData(d);
        console.log(d);
    }
  
    return (
        <div>
             <Navbar/>
            <div className="mentoDetails">
                <div>
                    <img style={{width: '100%', height: '100%',borderRadius:"10px 0px 0px 10px"}} src={data.image} alt=""/>
                </div>
                <div>
                    <p className="learn">LEARN FROM</p>
                    <p className="quote">{data.quote}</p>
                    <p className="priceLearn">AT ₹1,299 <span style={{color: '#F26437'}}>₹499</span>, YOU GET:</p>
                    <button className="btn3">ENROLL NOW</button>
                    <p className="learn">Exclusive Video Lectures on { data.title}</p>
                    <p className="learn">Certificate of Completion signed by {data.author} </p>
                </div>
            </div>
           
        </div>
    )
}