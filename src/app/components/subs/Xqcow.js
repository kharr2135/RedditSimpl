import React, {useEffect, useState} from 'react'
import {Link, useOutletContext} from 'react-router-dom'
import Post from '../Post'
import LoadingPost from '../LoadingPost'





export default function Xqcow() {
const [postData, setPostData] = useState(null)


  useEffect(() => {
    fetch('https://www.reddit.com/r/xqcow.json')
      .then(res => res.json())
      .then(data => setPostData(data.data.children))
  }, [])

  if (!postData) {
    return (
      <>

    <LoadingPost/>
    <LoadingPost/>
    <LoadingPost/>
    <LoadingPost/>
    </>
    )

}
  console.log(postData)
  const mappedPosts = postData.map(item => {
  return <Post 
            title={item.data.title}
            upVotes={item.data.ups}  
            author={item.data.author}
            date={item.data.date}
            comments={item.data.num_comments}
            key={item.data.id}
            nsfw={item.data.over_18}
  />})

  return (

    <>
    {mappedPosts}
    
    </>
    
  )
}

