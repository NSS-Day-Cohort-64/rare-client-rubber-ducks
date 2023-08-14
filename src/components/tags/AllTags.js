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
            <div class="container">
                <h2>Tags</h2>
                <div class="tags-content">
                    <article class="tags">
                        {tags.slice().sort((a, b) => a.label.localeCompare(b.label)).map((tag) => (
                            <section class="tag" key={`tag--${tag.id}`}>
                                <div class="tag-label">{tag.label}</div>
                                <div class="buttons">
                                    <button class="button edit-button">Edit</button>
                                    <button class="button delete-button">Delete</button>
                                </div>
                            </section>
                        ))}
                    </article>

                    <form class="form-container">
                        <input
                            class="form-input"
                            value={input}
                            placeholder="Insert Tag Name"
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button class="button add-button" onClick={(e) => addTag(e)}>
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}