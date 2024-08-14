import React, {useEffect, useState} from 'react'
import {NavLink, useOutletContext} from 'react-router-dom'
import Post from '../Post'
import LoadingPost from '../LoadingPost'





export default function Memes(props) {
const [postData, setPostData] = useState(null)
const [search, setSearch] = useOutletContext()

  useEffect(() => {
    fetch('https://www.reddit.com/r/memes.json') 
      .then(res => res.json())
      .then(data => setPostData(data.data.children))

  
  }, [])
  document.title=`r/memes`
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
  const filteredPosts = postData.filter(post => post.data.title.toLowerCase().includes(search.toLowerCase()))

 // if (!filteredPosts.length === 0) {
  //  return <h1>No Posts found</h1>
  //}
  const mappedPosts = filteredPosts.map(item => {
  return <Post 
            title={item.data.title}
            upVotes={item.data.ups}  
            author={item.data.author}
            date={item.data.date}
            comments={item.data.num_comments}
            key={item.data.id}
            nsfw={item.data.over_18}
            video={item.data.media?.reddit_video?.fallback_url}
            img={item.data.url}
  />})

  return (

    <>
    
    {filteredPosts.length > 0 ? mappedPosts : (
      <>
      <h1>No Posts Found</h1>
      <NavLink className="return" to="/" onClick={() => setSearch('')}>Return</NavLink>
    </>
    )}
    
    </>
    
  )
}

