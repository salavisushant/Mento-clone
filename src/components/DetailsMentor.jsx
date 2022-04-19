import "./details.css"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


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
                    <img style={{height:'50px',marginLeft:'10px'}} src="https://www.mento.co.in/assets/logo-e65920660caecc5be1d6b1757278bcb5745b83cfbf08d0dcdc5cd30bead06334.svg" alt=""/>
                </div>
                <div className="rightNavDiv">
                     <form>
                        <input type="search" placeholder="Topic name, Influences name"/>
                        <button type="submit">Search</button>
                    </form>
                        <button className="btn1">ALL TOPICS</button>
                        <button className="btn1">ABOUT</button>
                        <button className="btn2">LOGIN</button>
                </div>
            </div>
           
        </div>
    )
}