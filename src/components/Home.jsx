import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import "./home.css";


import {
    getDataError,
    getDataLoading,
    getDataSuccess,
} from "../redux/Action";



export const Home = () => {
    const [search, setSearch] = useState("");

    console.log(search);
    const dispatch = useDispatch();
    
    const { todos} = useSelector((state) => ({
      todos: state.todos,
    }));

    useEffect(() => {
        showData()
    },[])


    const showData = async() => {
        try{
            dispatch(getDataLoading());
            const data = await fetch(`http://localhost:3001/posts`)
            .then((d) => d.json());
            dispatch(getDataSuccess(data));
            console.log(data);
        } catch (err) {
            dispatch(getDataError(err));
      }
    }

  
        
    
 


    return (
        <div>
             <div style={{display: 'flex',marginTop:'1%'}}>
                <div>
                    <img style={{height:'50px',marginLeft:'10px'}} src="https://www.mento.co.in/assets/logo-e65920660caecc5be1d6b1757278bcb5745b83cfbf08d0dcdc5cd30bead06334.svg" alt=""/>
                </div>
                <div className="rightNavDiv">
                     <form>
                        <input type="search" onChange={(e)=>setSearch(e.target.value)} placeholder="Topic name,Influences name"/>
                        <button type="submit">Search</button>
                    </form>
                        <button className="btn1">ALL TOPICS</button>
                        <button className="btn1">ABOUT</button>
                        <button className="btn2">LOGIN</button>
                </div>
            </div>
            <div className="vdoDiv">
                <div style={{marginLeft:"10%"}}>
                    <p className="headName">Learn From India's Biggest Mentors</p>
                    <p className="scrollName">SCROLL DOWN TO DISCOVE LEARN FROM THE BEST OVER 350+ VIDEO LESSONS GET SIGNED CERTIFICATES</p>
                </div>
                <div>
                    <iframe  className="iFrame"
                        src="https://d1tthr7pv14hhy.cloudfront.net/Images/general/background1.mp4" alt="youtube">
                        
                    </iframe>
                    
                </div>
            </div>
            <p className="lessTag">ALL LESSONS</p>
            <div className="gridDiv">
                {
                    todos.filter((name) =>{
                        if (search === "") {
                            return todos;
                        } else {
                            return name.author.toLowerCase().includes(search.toLowerCase());
                        }
                    })
                    .map((e) => (
                        <Link style={{textDecoration: 'none',color: '#000000'}} to={`/posts/${e.id}`}>
                             <div className="infoDiv">
                            <img className="imgDiv" src={e.image} alt="" />
                            <p className="title1">{e.title}</p>
                            <div style={{display:'flex'}}>
                                <img className='roundImg' src={e.image} alt="" />
                                <div className="nameDiv">
                                    <p className="authText">{e.author}</p>
                                    <p className="company">{ e.comapany}</p>
                                </div>
                                <div className="videoDIV">
                                    <p className="authText" style={{marginLeft:'20%'}}>{e.video}</p>
                                    <p className="company">VIDEOS</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div>
            <div style={{width: '100%',marginTop: '15%'}}>
                <img style={{width: '100%'}} src="https://user-images.githubusercontent.com/87421852/164062836-82afd210-1240-4aa4-8959-a8f74bce70f6.png" alt="" />
            </div>
       </div>
    )
}