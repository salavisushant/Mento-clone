import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import "./home.css";


import {
    getTodoError,
    getTodoLoading,
    getTodoSuccess,
} from "../redux/Action";


export const Home = () => {

    const dispatch = useDispatch();
    
    const { todos} = useSelector((state) => ({
      todos: state.todos,
    }));

    useEffect(() => {
        showData()
    },[])


    const showData = async() => {
        try{
            dispatch(getTodoLoading());
            const data = await fetch(`http://localhost:3001/posts`)
            .then((d) => d.json());
            dispatch(getTodoSuccess(data));
            console.log(data);
        } catch (err) {
            dispatch(getTodoError(err));
      }
    }


    return (
        <div>
            <div style={{display: 'flex'}}>
                <div>
                    <img src="https://www.mento.co.in/assets/logo-e65920660caecc5be1d6b1757278bcb5745b83cfbf08d0dcdc5cd30bead06334.svg" alt=""/>
                </div>
                <div className="rightNavDiv">
                     
                </div>
                <div>
                    {
                        todos.map((e) => (
                            <div></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}