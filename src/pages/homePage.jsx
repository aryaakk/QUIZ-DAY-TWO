import React from "react";
import './../assets/style.css'

import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const postContent = [
        {
            idPost: 1,
            namePost: "HELLO WORLD",
            content: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            author : "ARYAK"
        },
        {
            idPost: 2,
            namePost : "HELLO GOD",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in varius augue. Integer condimentum dictum dignissim. Etiam sollicitudin posuere porta. Curabitur aliquam nisi ut sagittis placerat. Vivamus cursus, odio efficitur pretium auctor, orci massa lacinia nisi, ut commodo mi ligula et leo. Praesent malesuada diam et ante eleifend ornare. Maecenas pharetra finibus quam, at feugiat tortor ultrices nec. In sodales, lectus ac congue porttitor, est quam mattis est, a tincidunt urna est et nulla. Pellentesque erat tortor, pellentesque in augue et, varius gravida nunc. Integer sed ligula dapibus, mattis odio sed, tristique mi. Mauris vel nulla in metus tincidunt blandit sed mattis libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
            author : "ARYAK"
        },
        {
            idPost: 3,
            namePost : "HELLO HELL",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in varius augue. Integer condimentum dictum dignissim. Etiam sollicitudin posuere porta. Curabitur aliquam nisi ut sagittis placerat. Vivamus cursus, odio efficitur pretium auctor, orci massa lacinia nisi, ut commodo mi ligula et leo. Praesent malesuada diam et ante eleifend ornare. Maecenas pharetra finibus quam, at feugiat tortor ultrices nec. In sodales, lectus ac congue porttitor, est quam mattis est, a tincidunt urna est et nulla. Pellentesque erat tortor, pellentesque in augue et, varius gravida nunc. Integer sed ligula dapibus, mattis odio sed, tristique mi. Mauris vel nulla in metus tincidunt blandit sed mattis libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
            author : "ARYAK"
        }
    ]

    const navigate = useNavigate();
    const clickRender = (postID) => {
        console.log(postID.idPost)
        navigate(`/post/${postID.idPost}`, {
            state: {
                from: "HOMEPAGE",
                postId: postID.idPost,
                postName : postID.namePost,
                contentPost: postID.content,
                authorPost : postID.author
            }
        })
    }

    return (
        <>
            <div className="content">
                {postContent.map((item, index) => {
                    return (
                        <div key={index} className="post" onClick={() => clickRender(item)}>
                            <h1>Post {item.idPost}. {item.namePost} <span>Author : {item.author}</span></h1>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default HomePage