import "./details.css"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom"


export const DetailsOfMentor = () => {
    let {id} = useParams();

    const [data, setData] = useState({});
    
    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        let res = await fetch(`http://localhost:3001/posts/${id}`);
        let d = await res.json();
        setData(d);
        console.log(d);
    }
  
    return (
        <div>
             <div style={{display: 'flex',marginTop:'1%'}}>
                <div>
                  <Link to="/">  <img style={{height:'50px',marginLeft:'10px'}} src="https://www.mento.co.in/assets/logo-e65920660caecc5be1d6b1757278bcb5745b83cfbf08d0dcdc5cd30bead06334.svg" alt=""/></Link>
                </div>
                <div className="rightNavDiv">
                     <form>
                        <input type="search" placeholder="Topic name, Influences name"/>
                        <button type="submit">Search</button>
                    </form>
                       <Link to="/topic"> <button style={{marginTop:"10%"}} className="btn1">ALL TOPICS</button></Link>
                        <button className="btn1">ABOUT</button>
                        <button className="btn2">LOGIN</button>
                </div>
            </div>
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