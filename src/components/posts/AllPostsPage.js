import React, { useEffect, useState } from "react";

export const AllPostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8088/Posts")
    }, []);

    return (
        <>
            <h2>All Posts</h2>
            <article className="Posts">
                {posts.map((post) => (
                    <section className="post" key={`post--${post.id}`}>
                        <header>{post.title}</header>
                        <l1>{post.author_name}</l1>
                        <l1>{post.category}</l1>
                    </section>
                ))}
            </article>
        </>
    );
};