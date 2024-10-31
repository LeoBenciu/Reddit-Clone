import React from 'react'
import Post from '../Post/Post';

const Feed = () => {

    const feed = [
        {subreddit: 'r/CasualRO',
         posted: '2hr. ago',
         title: 'Alex a terminat tot salamul',
         description: 'https://youtube.com/clip/UgkxBNj40i5wxXT7Mi16FRZbqXg19kNXHHa7?si=gYx6frhycJgdydvR',
         media: [],
         votes: 45,
         comments: 31,
        },
        {subreddit: 'r/Romania',
            posted: '4hr. ago',
            title: 'Cum manipuleaza Partidele opinia publica pe Reddit',
            description: 'https://www.albawaba.com/node/over-100-women-commit-mass-suicide-1591038',
            media: [],
            votes: 534,
            comments: 13,
           },
        {subreddit: 'r/LivestreamFail',
         posted: '2hr. ago',
         title: 'Soferii profesionisti sunt kamikaze',
         description: 'O cafea se duce la psiholog:Spune-mi, ce te macină?',
         media: [],
         votes: 6775,
         comments: 34,
        },
        {subreddit: 'r/Romania',
            posted: '12hr. ago',
            title: 'Pisa-te ca vine trenul',
            description: '',
            media: [],
            votes: 65,
            comments: 4566,
           },
        {subreddit: 'r/Romania',
         posted: '1hr. ago',
         title: 'Dezbatere Marcel Ciolacu',
         description: 'La fel ca la postarea de ieri, aștept păreri la cald',
         media: [],
         votes: 567,
         comments: 6,
        },
        {subreddit: 'r/romaniacrazy',
            posted: '2hr. ago',
            title: 'Practici nesustenabile in prostitutie',
            description: '',
            media: [],
            votes: 4,
            comments: 4,
           },
        {subreddit: 'r/programare',
         posted: '6hr. ago',
         title: 'Unedited photo of donald trump',
         description: '',
         media: [],
         votes: 36,
         comments: 96,
        },
        {subreddit: 'r/worldnews',
            posted: '3hr. ago',
            title: 'Cum adica Poze?',
            description: '',
            media: [],
            votes: 35,
            comments: 3,
           },
        {subreddit: 'r/Damnthatsinteresting',
         posted: '1hr. ago',
         title: 'A murit ieri, azi merge pe strada',
         description: '',
         media: [],
         votes: 23,
         comments: 11,
        },

    ]

  return (
    <div className='Feed' style={{flex: '2.5', height:'100%', marginRight: '15px'}}>
      {feed.map((post,index)=>(
        <Post 
        key={index} 
        numberOfComments={post.comments} 
        upVotesMinusDownVotes={post.votes} 
        posted={post.posted} 
        subreddit={post.subreddit} 
        title={post.title} 
        description={post.description} 
        media={post.media}>
        </Post>
      ))}
    </div>
  )
}

export default Feed;
