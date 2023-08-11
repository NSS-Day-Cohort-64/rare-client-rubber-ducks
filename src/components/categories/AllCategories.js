import React, { useEffect, useState } from "react"
import './Category.css'

export const AllCategories = () => {
    const [categories, setCategories] = useState([])
    useEffect(
        () => {
        fetch("http://localhost:8088/categories")
            .then(response => response.json())
            .then(data => setCategories(data))
        },[])   

    return (
        <>
            <h2>Categories</h2>
            <article className="categories">
                {categories.map((category) => (
                    <section className="category" key={`category--${category.id}`}>
                    
                        <ul>
                            <li><a href>{category.label}</a></li>
                        </ul>
            <div>
            <button className='edit-button'>
                Edit
            </button>
            <button className='delete-button'>
                Delete
            </button>
            </div>
                    </section>
                ))}
            </article>
        </>
    )
}
          