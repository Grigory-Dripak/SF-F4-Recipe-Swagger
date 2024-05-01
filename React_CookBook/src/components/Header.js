import React from "react";
import "../styles/Header.css";
import { Link } from 'react-router-dom'

export default function Header() {
        return (
            <header>
                <nav>
                    <Link className='header-link' to='/'>Твоя поваренная книга</Link>
                </nav>
            </header>
        );
}