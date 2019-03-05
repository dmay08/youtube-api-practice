import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => { // destructured from (props)
    const renderedList = videos.map((video) => { // don't have to say 'props.videos.map'
        return <VideoItem 
            video={video} 
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
            />
    })
    return <div className="ui relaxed divided list"> {renderedList} </div>
}

export default VideoList