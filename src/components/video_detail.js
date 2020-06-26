import React from 'react';

const VideoDetail = ({ video }) => {

    if (!video) {
        return <div className="col-md-12">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} title="video"></iframe>
            </div>
            <div className="details">
                <h5>{video.snippet.title}</h5>
                <div className="text-truncate">{video.snippet.description}</div>
                <div className="row">
                    <div className="col-sm font-weight-bold">
                        {video.snippet.publishTime.split("T")[0]}
                    </div>
                    <div className="col-sm text-right">
                        <span className="badge badge-pill badge-primary">{video.snippet.channelTitle}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;