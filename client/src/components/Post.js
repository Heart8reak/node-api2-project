import React from 'react'

const Post = props => {
    return (
        <div>
            <h3>Title: {props.title}</h3>
            <h4>{props.content}</h4>
            <p>Created: {props.created_at}</p>
            <hr />
        </div>
    )
}

export default Post