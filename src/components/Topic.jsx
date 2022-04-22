
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import "./topic.css";






export const Topic = () => {
    const [list, setList] = useState([]);
  

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
        setList(rows)
    }

     const handleCheckFilm = () => {
        const rows = [...list].filter((row) => row.topic === "film making");
        setList(rows) 
    };
    
     const handleCheckIllustrar = () => {
        const rows = [...list].filter((row) => row.topic === "illustrator");
        setList(rows) 
    };

     const handleCheckFashion = () => {
        const rows = [...list].filter((row) => row.topic === "fashion blogging");
        setList(rows) 
    };

     const handleCheckComedian = () => {
        const rows = [...list].filter((row) => row.topic === "comedian");
        setList(rows) 
    };

     const handleCheckPhotograph = () => {
        const rows = [...list].filter((row) => row.topic === "Photographer");
        setList(rows) 
    };

    const handleCheckRadio = () => {
        const rows = [...list].filter((row) => row.topic === "radio jockey" );
        setList(rows) 
    };

     const handleCheckBitBoxing = () => {
        const rows = [...list].filter((row) => row.topic === "beat boxing");
        setList(rows) 
    };

  

    return (
        <div>
             <div style={{display: 'flex',marginTop:'1%'}}>
                <div>
                    <Link to="/"><img style={{height:'50px',marginLeft:'10px'}} src="https://www.mento.co.in/assets/logo-e65920660caecc5be1d6b1757278bcb5745b83cfbf08d0dcdc5cd30bead06334.svg" alt=""/></Link>
                </div>
                <div className="rightNavDiv">
                     <form>
                        <input type="search" placeholder="Topic name,Influences name"/>
                        <button type="submit">Search</button>
                    </form>
                        <button className="btn1">ALL TOPICS</button>
                        <button className="btn1">ABOUT</button>
                        <button className="btn2">LOGIN</button>
                </div>
            </div>
            <p className="lessTag">ALL LESSONS</p>
            <div className="topicDiv">
                <div>
                    <p className="filterName">ALL TOPICS</p>
                    <p className="filterName" onClick={handleCheckFilm }>FILM-MAKING</p>
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
                    list.map((e) => (
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