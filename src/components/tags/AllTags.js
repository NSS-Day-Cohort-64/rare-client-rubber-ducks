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
            body: JSON.stringify({ "label": input })
        })
            .then(response => response.json())
            .then(result => {
                setInput("")
                getTags()
            })
    }

    return (
        <>
            <h2 className="pageTitle">Tags</h2>
            <div className="container">
                <div className="mytag-content">
                    <article className="tags">
                        {tags.slice().sort((a, b) => a.label.localeCompare(b.label)).map((tag) => (
                            <section className="mytag" key={`tag--${tag.id}`}>
                                <div className="mytag-label">{tag.label}</div>
                                <div className="buttons">
                                    <button className="button edit-button">Edit</button>
                                    <button className="button delete-button">Delete</button>
                                </div>
                            </section>
                        ))}
                    </article>

                    <form className="form-container">
                        <input
                            className="form-input"
                            value={input}
                            placeholder="Insert Tag Name"
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button className="button add-button" onClick={(e) => addTag(e)}>
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}