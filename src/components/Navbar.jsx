import { Link } from "react-router-dom"
import "./navbar.css"
import { useState } from "react"
import { Button, Modal,Carousel } from "react-bootstrap";

export const Navbar = () => {
      

      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
            <div style={{display: 'flex',marginTop:'1%'}}>
                <div>
                  <Link to="/">  <img style={{height:'50px',marginLeft:'10px'}} src="https://www.mento.co.in/assets/logo-e65920660caecc5be1d6b1757278bcb5745b83cfbf08d0dcdc5cd30bead06334.svg" alt=""/></Link>
                </div>
                <div className="rightNavDiv">
                     <form>
                        <input type="search"  placeholder="Topic name,Influences name"/>
                        <button type="submit">Search</button>
                    </form>
                        <Link style={{marginTop:"15px"}} to="/topic"><button className="btn1">ALL TOPICS</button></Link>
                        <Link style={{marginTop:"15px"}} to="/about" ><button className="btn1">ABOUT</button></Link>
                        <button className="btn2"  onClick={handleShow} >LOGIN</button>
            </div>
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
                                <Button style={{ backgroundColor: "#3B5997" }} size="lg">FACEBOOK</Button>
                            <Button style={{backgroundColor:"red",marginLeft: '10%'}} size="lg">GOOGLE</Button>
                        </div>
                       </div>
                    </div>
        </Modal.Body>
      </Modal>
        </div>
    )
}