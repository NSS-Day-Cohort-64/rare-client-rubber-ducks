import React, { useEffect, useState } from "react"
import "./AllTags.css"

export const AllTags = () => {
    const [tags, setTags] = useState([])

    useEffect(
        () => {
        fetch("http://localhost:8088/tags")
            .then(response => response.json())
            .then(data => setTags(data))
        },
        []
    )

    return (
        <>
            <h2>Tags</h2>
            <article className="Tags">
                {tags.map((tag) => (
                    <section className="tag" key={`tag--${tag.id}`}>
                        <ul>
                            <li>{tag.label}</li>
                        </ul>
                        <div className="buttons">
                            <button className="edit-button">
                                Edit
                            </button>
                            <button className="delete-button">
                                Delete
                            </button>
                        </div>
                    </section>
                ))}
            </article>
        </>
    )
}