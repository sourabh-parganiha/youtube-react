import React from 'react';

const VideoListItem = ({video, onUserSelected}) => {
    
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
    <li onClick={() => onUserSelected(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} alt='NA'/>
            </div>
            <div className="media-body text-left">
                <h6>{video.snippet.title}</h6>
                <span className="badge badge-pill badge-primary">{video.snippet.channelTitle}</span>
            </div>
            
        </div>
    </li>
    );
};

export default VideoListItem;