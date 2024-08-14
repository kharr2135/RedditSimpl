import React, {useState} from 'react'
import { BiUpvote, BiDownvote, BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";


export default function Post(props) {
const [count, setCount] = useState(props.upVotes)

    return (
        <div className='postContainer'>
            <div className='votesContainer'>
                <div className='upVote'>
                    {props.upVotes === count || count === props.upVotes - 1? (<button className='inheritButton' onClick={() => {
                        if (props.upVotes === count) {
                            
                            setCount(prevCount => prevCount += 1)
                        }
                        else if (props.upVotes !== count){
                            setCount(prevCount => prevCount += 0)
                        }
                        }}>
                            <BiUpvote />
                    </button>): <BiSolidUpvote style={{fontSize: '140%'}}/>}
                </div>
                <div>
                <p className={ count === props.upVotes ? 'voteNumber' : count === props.upVotes + 1 ? "upVoteNumber" :"downVoteNumber"}>{count}</p>
                </div>
                <div className='downVote'>
                {props.upVotes === count || count === props.upVotes + 1? (<button className='inheritButton' onClick={() => {
                        if (props.upVotes === count) {
                            
                            setCount(prevCount => prevCount -= 1)
                        }
                        else if (props.upVotes !== count){
                            setCount(prevCount => prevCount += 0)
                        }
                        }}>
                            <BiDownvote />
                    </button>): <BiSolidDownvote style={{fontSize: '140%'}}/>}
                </div>
            </div>
            <div className='mainDataContainer'>
                <div className='postTitle'>
                    <h1>{props.title}</h1>
                </div>
                {props.video ? (<div className='postImgContainer'>
                    <video src={props.video} autoPlay muted loop>failed to load</video>
                </div>) : props.img ? (<div className='postImgContainer'>
                    <img className="postImg" src={props.img} alt="" onError={() => ""}/>
                </div>) : null}
                <div className='postMiniDetails'>
                    <div>
                        <p>u/{props.author}</p>
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