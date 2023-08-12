import React, { useEffect, useState } from "react";

export const UserPostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8088/posts?users=${localStorage.getItem('auth_token')}`)
            .then(response => response.json())
            .then(data => setPosts(data))
            
    }, []);

    return (
        <>
            <h2>My Posts</h2>
            <article className="Posts">
                {posts.map((post) => (
                    <section className="post" key={`post--${post.id}`}>
                        <header>{post.title}</header>
                        <div>{post.user.first_name}</div>
                        <div>{post.user.last_name}</div>
                        <div>{post.category}</div>
                    </section>
                ))}
            </article>
        </>
    );
};