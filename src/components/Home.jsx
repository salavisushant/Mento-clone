import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom"
import "./home.css";
import { Button, Modal,Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLogin } from "react-google-login";



import {
    getDataError,
    getDataLoading,
    getDataSuccess,
} from "../redux/Action";



export const Home = () => {
    const [search, setSearch] = useState("");

      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    console.log(search);
    const dispatch = useDispatch();
    
    const { todos} = useSelector((state) => ({
      todos: state.todos,
    }));

    useEffect(() => {
        showData()
    },[])

    const responseGoogle = (response) => {
    let { email, name, googleId, imageUrl } = response.profileObj;
    let personDetail = {
      email,
      name,
      googleId,
      imageUrl
    };
    console.log(personDetail);
        localStorage.setItem("userData", personDetail.name);
        localStorage.setItem("userImage", personDetail.imageUrl)
  };

    const showData = async() => {
        try{
            dispatch(getDataLoading());
            const data = await fetch(`https://mento-clone.herokuapp.com/posts`)
            .then((d) => d.json());
            dispatch(getDataSuccess(data));
            console.log(data);
        } catch (err) {
            dispatch(getDataError(err));
      }
    }


   let name = localStorage.getItem("userData")
  
        
    
 


    return (
        <div>
         
             <div style={{display: 'flex',marginTop:'1%',width:"100%"}}>
                <div style={{display: 'flex'}}>
                    <img style={{height:'50px',marginLeft:'10px'}} src="https://www.mento.co.in/assets/logo-e65920660caecc5be1d6b1757278bcb5745b83cfbf08d0dcdc5cd30bead06334.svg" alt=""/>
                    <p className="namUser">{ name}</p>
                </div>
                <div className="rightNavDiv">
                     <form>
                        <input type="search" onChange={(e)=>setSearch(e.target.value)} placeholder="Topic name,Influences name"/>
                        <button type="submit">Search</button>
                    </form>
                        <Link style={{marginTop:"15px"}} to="/topic"><button className="btn1">ALL TOPICS</button></Link>
                        <Link style={{marginTop:"15px"}} to="/about" ><button className="btn1">ABOUT</button></Link>
                        <button className="btn2"  onClick={handleShow} >LOGIN</button>
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
                             <div className="infoDiv" key={e.id}>
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
             <Modal show={show} onHide={handleClose} size="lg" >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="modal-Div">
                    <div>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    style={{width: "100%", height: "300px"}}
                                src="https://openthemagazine.com/wp-content/uploads/2016/01/19998.ritesh.jpg"
                                alt="First slide"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    style={{width: "100%", height: "300px"}}
                                src="https://static.toiimg.com/photo/70831128.cms"
                                alt="Second slide"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    style={{width: "100%", height: "300px"}}
                                src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/8/25/w900X450/A_NEW_CHAPTER-.PNG?w=400&dpr=2.6"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                             <Carousel.Item interval={1000}>
                                <img
                                className="d-block w-100"
                                style={{width: "100%", height: "300px"}}
                                src="https://www.nykaafashion.com/style-files/wp-content/uploads/2021/03/santoshi_1170x556.jpg"
                                alt="Second slide"
                                />
                                
                        </Carousel.Item>
                          <Carousel.Item interval={1000}>
                                <img
                                className="d-block w-100"
                                style={{width: "100%", height: "300px"}}
                                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Saad_oct_2014_resize.jpg"
                                alt="Second slide"
                                />
                                
                            </Carousel.Item>
                        </Carousel>
                         
                    </div>
                    <div>
                        <div style={{marginLeft:"10%",marginTop:"10%"}}>
                             <p className="welcome">Welcome Back!</p>
                        <p className="log">LOG IN WITH  </p>
                        <div style={{display: 'flex',marginLeft: '15%'}}>
                                <Button style={{ backgroundColor: "#3B5997",marginRight:"5%" }} size="lg">FACEBOOK</Button>
                          
                                <GoogleLogin

                                className="signin-btn"
                                clientId="982316181452-h2um7ud51f9e70s6b3obb6bo003bugjs.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                            />
                            </div>
                       </div>
                    </div>
        </Modal.Body>
      </Modal>
       </div>
    )
}