import React from 'react'
import { useEffect,useState } from 'react'
import Styles from './Books.module.css'
import { Link } from 'react-router-dom'


function Books() {

    // careating all the states that is needed in this project

    const [bookDetails,setBookDetails] = useState([])
    const [seachBookes , setSearchBookes] = useState("")


    // using useEffect we are calling the calling, and get data 
    useEffect(()=>{
        fetch('https://reactnd-books-api.udacity.com/books',{
            headers: {
            'Authorization': 'whatever-you-want'
            }
        })
        .then(res => res.json())
        .then((bookDetailsData)=>{
            console.log(bookDetailsData)
            setBookDetails(bookDetailsData.books)
        })
    },[])


    const handleSearch = (e) => {
        setSearchBookes(e.target.value)
    }

    return (
        <>
            <div className={Styles.navbar}>
                <h1 className={Styles.companyName}>Kalvium Books</h1>
                <div><input type="text"  placeholder=' 🔍 Search Book Name' className={Styles.searchBox} onChange={handleSearch}/></div>
                <Link to="Register"><button className={Styles.register}>Register</button></Link>
            </div>

            {/* we use filter to show the result of searchBox */}
            <div className={Styles.booksContainer}>
                {bookDetails
                .filter((book)=> book.title.toLowerCase().includes(seachBookes.toLowerCase()))
                .map((book)=>{
                console.log(book)
                return (
                    <div>
                        <div className={Styles.booksDetails}>
                            <div className={Styles.individualBook}>
                            <div className={Styles.bookTitle}>{book.title}</div>
                                <img className={Styles.bookImg} src={book.imageLinks.smallThumbnail} alt="Book Image"/>
                        
                                <div className={Styles.bookRateAndPrice}>
                                    <p className={Styles.averageRating}>{book.averageRating}⭐</p>
                                    
                                    <span>Free</span>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                
                )})
            }
            </div>
        </>
    )
}

export default Books
