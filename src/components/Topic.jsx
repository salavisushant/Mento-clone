
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import "./topic.css";
import {Navbar} from "./Navbar"





export const Topic = () => {
    const [list, setList] = useState([]);
    const [data,setData] = useState([])
  

    useEffect(() => {
        showData()
    }, [])


    const showData = async () => {
        let res = await fetch(`https://mento-clone.herokuapp.com/posts`);
        let data = await res.json();
        console.log(data);
        setList(data);
    }

    const handleCheckEntrepreneur = () => {
        const rows = [...list].filter((data) => {
            return data.topic === "entrepreneurship";
        });
        setData(rows)
        console.log(rows);
    }

     const handleCheckFilm = () => {
         const rows = [...list].filter((row) => row.topic === "film making");

        setData(rows) 
    };
    
     const handleCheckIllustrar = () => {
        const rows = [...list].filter((row) => row.topic === "illustrator");
        setData(rows) 
    };

     const handleCheckFashion = () => {
        const rows = [...list].filter((row) => row.topic === "fashion blogging");
        setData(rows) 
    };

     const handleCheckComedian = () => {
        const rows = [...list].filter((row) => row.topic === "comedian");
        setData(rows) 
    };

     const handleCheckPhotograph = () => {
         const rows = [...list].filter((row) => row.topic === "Photographer");
         console.log(rows);
        setData(rows) 
    };

    const handleCheckRadio = () => {
        const rows = [...list].filter((row) => row.topic === "radio jockey" );
        setData(rows) 
    };

     const handleCheckBitBoxing = () => {
         const rows = [...list].filter((row) => row.topic === "beat boxing");
        setData(rows) 
    };

    const handleAllData = () => {
        setData([])
    }

  

    return (
        <div>
           <Navbar/>
            <p className="lessTag">ALL LESSONS</p>
            <div className="topicDiv">
                <div>
                    <p className="filterName"  onClick={handleAllData}>ALL TOPICS</p>
                    <p className="filterName"  onClick={handleCheckFilm }>FILM-MAKING</p>
                    <p className="filterName"  onClick={handleCheckBitBoxing}>BEAT BOXING</p>
                    <p className="filterName"  onClick={handleCheckEntrepreneur}>ENTREPRENEURSHIP</p>
                    <p className="filterName"  onClick={handleCheckFashion}>FASHION BLOGGING</p>
                    <p className="filterName"  onClick={handleCheckIllustrar}>ILLUSTRATION</p>
                    <p className="filterName"  onClick={handleCheckComedian}>STAND-UP COMEDY</p>
                    <p className="filterName"  onClick={handleCheckRadio}>RADIO JOCKEY</p>
                    <p className="filterName"  onClick={handleCheckPhotograph}>PHOTOGRAPHY</p>
                </div>
                <div className="gridDiv">
                    {
                    data.length?
                    data.map((e) => (
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
                    )) : list.map((e) => (
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
            </div>
            <div style={{width: '100%',marginTop: '15%'}}>
                <img style={{width: '100%'}} src="https://user-images.githubusercontent.com/87421852/164062836-82afd210-1240-4aa4-8959-a8f74bce70f6.png" alt="" />
            </div>
       </div>
    )
}