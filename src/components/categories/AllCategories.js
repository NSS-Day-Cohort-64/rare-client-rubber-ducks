import React, { useEffect, useState } from "react"
import './Category.css'

export const AllCategories = () => {
    const [categories, setCategories] = useState([])
    const [input, setInput] = useState("")

        
        useEffect(
            () => {
                getCategory()
            },
            []
        )

    
    const getCategory = () => {
        fetch("http://localhost:8088/categories")
            .then(response => response.json())
            .then(data => setCategories(data))
    }


    const addCategory = (e) => {
        e.preventDefault()
        fetch("http://localhost:8088/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"label": input})
        })
            .then(response => response.json())
            .then(result => {
                setInput("")
                getCategory()
            })
    }


    return (
        <>
            <div className="category-body">
            <h2 className="category-title">Categories</h2>
            <div className="category-form-search">
                <form className="category-form">
                    <input
                        value={input}
                        placeholder="Insert Category Name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="add-button" onClick={(e) => addCategory(e)}>
                        Create
                    </button>
                </form>
            </div>
            <br></br>

            <div className="Category-Content">
                <article className="categories">
                    {categories.map((category) => (
                        <section className="category" key={`category--${category.id}`}>
                            <ul><a href="/categories/edit/1">
                                <li className="category-label">{category.label}</li>
                            </a>
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
            </div>
            </div>
        </>
    );
}







   