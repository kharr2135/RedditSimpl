import React from 'react'
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";


export default function Post(props) {
    return (
        <div className='postContainer'>
            <div className='votesContainer'>
                <div className='upVote'>
                    <button className='inheritButton'>
                    <BiUpvote/>
                    </button>
                </div>
                <div>
                <p className='voteNumber'>{props.upVotes}</p>
                </div>
                <div className='downVote'>
                    <button className='inheritButton'>
                        <BiDownvote/>
                    </button>
                    {/*gonna needa replace later */}
                </div>
            </div>
            <div className='mainDataContainer'>
                <div className='postTitle'>
                    <h1>{props.title}</h1>
                </div>
                {props.media ? (<div className='postImg'>
                    {/*add img here */}
                </div>) : null}
                <div className='postMiniDetails'>
                    <div>
                        <p>{props.author}</p>
                    </div>
                    {props.nsfw ? (<div className='nsfw'>
                        NSFW
                    </div>): (<div className='recent'>
                        Recent
                    </div>) }
                    <div>
                        <div style={{display: 'flex'}}>
                            <button className='inheritButton'>
                            <GoCommentDiscussion/>
                            </button>
                            <p style={{marginLeft: '5px'}}>{props.comments}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}