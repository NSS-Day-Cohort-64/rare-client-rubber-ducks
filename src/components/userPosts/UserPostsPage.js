import React, { useEffect, useState } from "react";
import "./UserPostsPage.css"
import { Link } from "react-router-dom";

export const UserPostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8088/posts?users=${localStorage.getItem('auth_token')}`)
            .then(response => response.json())
            .then(data => setPosts(data))

    }, []);

    return (
        <>
            <div className="UserPostsPage">
                <h2 className="PageTitle">My Posts</h2>
                <div className="PostsContainer">
                    {posts.map((post) => (
                        <div className="Post" key={`post--${post.id}`}>
                            <Link to={`/posts/${post.id}`} className="postTitle">{post.title}</Link>
                            <div className="UserInfo">
                                <div className="UserName">
                                    {post.user.first_name} {post.user.last_name}
                                </div>
                            </div>
                            <div className="Category">{post.category}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};