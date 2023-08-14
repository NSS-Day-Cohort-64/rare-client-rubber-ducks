import React, { useEffect, useState } from "react"
import "./AllTags.css"

export const AllTags = () => {
    const [tags, setTags] = useState([])
    const [input, setInput] = useState("")

    useEffect(
        () => {
        getTags()
        },
        []
    )
    
    const getTags = () => {
        fetch("http://localhost:8088/tags")
            .then(response => response.json())
            .then(data => setTags(data))
        }

    const addTag = (e) => {
        e.preventDefault()
        fetch("http://localhost:8088/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"label": input})
    })
        .then(response => response.json())
        .then(result => {
            setInput("")
            getTags()
        })
    }

    return (
        <>
            <h2>Tags</h2>
            <div className="Tags-Content">
            <article className="Tags">
                {tags.slice().sort((a, b) => a.label.localeCompare(b.label)).map((tag) => (
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

            <form>
                <input
                    value={input}
                    placeholder="Insert Tag Name"
                    onChange={(e) => setInput(e.target.value)}>
                </input>
                <button className="add-button button"
                    onClick={(e) => addTag(e)}>
                Create
                </button>

            </form>
            </div>
        </>
    )
}