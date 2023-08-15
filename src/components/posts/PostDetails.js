import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PostDetails = () => {
    const [post, setPost] = useState({});

    const { postId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8088/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data[0]))            
    }, [postId]);

    if (!post.user) {
        return <div>Loading...</div>;
    }

    return (
        <>
        {console.log(post)}
            <h2>{post.title}</h2>
                <div>{post.user.first_name}</div>
                <div>{post.user.last_name}</div>
                <div>{post.category.label}</div>
                <div>{post.publication_date}</div>
                <div>{post.content}</div>
        </>
    );
};