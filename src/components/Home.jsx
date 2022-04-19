import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"


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

        </div>
    )
}