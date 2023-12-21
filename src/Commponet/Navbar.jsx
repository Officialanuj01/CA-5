import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>       
            <Link to="/"> <h3>KALVIUM❤️</h3></Link>
            <ul>
                <Link to="/Contact">Contact</Link>
                <Link to="/RegistrationForm">Registration Form</Link>
            </ul>
        </div>
    )
}
