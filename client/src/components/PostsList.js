import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'


const PostsList = props => {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/posts')
            .then(res => {
                console.log(res)
                setPostList(res.data)
            })
            .catch(err => console.log('Error: ', err))
    }, [])

    return (
        <div>
            {postList.map(postData => {
                return (
                <Post 
                key={postData.id} 
                title={postData.title}
                content={postData.contents}
                created_at={postData.created_at}
                />
                )
            })}
        </div>
    )
}

export default PostsList