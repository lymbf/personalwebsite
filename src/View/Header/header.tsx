import React from 'react';
import './index.css';
import {useNavigate} from "react-router-dom";
import Logo from "./logo";

export default function Header() {
    const navigate = useNavigate()
    return (

        <div className = 'Header'>
            <Logo/>
            <ul>

                    <li className = 'hov' onClick = {()=>{navigate('/')}}>Home</li>
                    <li className = 'hov' onClick = {()=>{navigate('/articles')}}>Articles</li>
                    <li className = 'hov' onClick = {()=>{navigate('/about')}}>About Me</li>
                    <li className = 'hov' onClick = {()=>{navigate('/contact')}}>Contact</li>


            </ul>
        </div>
    )
}