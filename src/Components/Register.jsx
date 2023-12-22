import React from 'react'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'

import Styles from './Register.module.css'

function Register() {
    const initialValue = {name: "", email: "", password: "", repeatPassword: "",}

    const [formvalues, setFormValues] = useState(initialValue)
    const [formErrors, setFormErrors] = useState({})
    const [isRegistered, setIsRegistered] = useState(false)
    
    

    function handleChange(e){
        const {name,value} = e.target;
        setFormValues({...formvalues, [name]:value});


    }

    function handleSubmit(e){
        e.preventDefault()
        setFormErrors(validate(formvalues))
        setIsRegistered(true)
        

    }

    useEffect(()=>{
        if(Object.keys(formErrors).length ===0 && isRegistered){
        setFormValues(initialValue)
        

        }
    },[formErrors, isRegistered])

    function validate(values){
        const errors = {}
        const regexForEmail = /@/;
        const regexPasswordFormat = /[!@#$%^&*()_+-={}|;:><?/]/

        if(!values.name){
        errors.name = "Name is requried" 
        }

        if(!values.email){
        errors.email = "Email is requried" 
        } else if(!regexForEmail.test(values.email)){
        errors.email = "Email formet is not correct" 
        }

        if (!values.password){
            errors.password = "Password is required";
        } else if (!regexPasswordFormat.test(values.password) || values.password.length < 10){
            errors.password = "Password should have at least 10 characters and include special characters.";
        }
    
        if (!values.repeatPassword){
            errors.repeatPassword = "Please enter the password again";
        } else if (values.password !== values.repeatPassword){
            errors.repeatPassword = "Please enter the same password";
        }


        return errors

    }

    return(
        <>
            
                <form className={Styles.form}>
                    <h1>Register</h1>
                    {(Object.keys(formErrors).length ===0 && isRegistered)?<p className={Styles.registeredSucussMessage}>Registration Succesful please click on login button to get the access</p> : ""}
                        <div>
                        
                        <input type="text" value={formvalues.firstname} onChange={handleChange} placeholder='Name' className='inputField' name="name"/>
                        <p className={Styles.errors}>{formErrors.name}</p>
                        </div>
                        <div>
                        <input type="text" value={formvalues.email} onChange={handleChange} placeholder='Email' className='inputField' name="email"/>
                        <p className={Styles.errors}>{formErrors.email}</p>
                        </div>
                        <div>
                        <input type="text" value={formvalues.phonenumber} onChange={handleChange} placeholder='Password' className='inputField' name="password"/>
                        <p className={Styles.errors}>{formErrors.password}</p>
                        <input type="text" value={formvalues.phonenumber} onChange={handleChange} placeholder=' Repeat Password' className='inputField' name="repeatPassword"/>
                        <p className={Styles.errors}>{formErrors.repeatPassword}</p>
                        </div>
                        <div className={Styles.conformation}>
                            <input type="checkbox" className={Styles.checkbox} required/>
                            <span>I have read all the terms, and conditions.</span>
                        </div>
                        <div className={Styles.buttons}>
                            <Link to="/"><button href = "/" onClick={handleSubmit} id='resisteredBTN'>Register</button></Link>
                            <Link to="/"><button>login</button></Link>
                        </div>
                        
                </form>
            
            
        
        </>
    )
}

export default Register

