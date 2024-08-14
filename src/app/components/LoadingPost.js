import React from 'react'
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";


export default function LoadingPost(props) {
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
                   <div className='loadingDiv'></div>
                </div>
                {props.media ? (<div className='postImg'>
                    {/*add img here */}
                </div>) : null}
                <div className='postMiniDetails'>
                <div className='loadingDiv2'>
                        
                        </div>
                    <div className='loadingDiv2'>

                    </div>
                    <div>
                        <div style={{display: 'flex'}}>
                        <div className='loadingDiv2'>
                        
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}