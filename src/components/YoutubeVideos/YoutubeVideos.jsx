
//API KEY AIzaSyDC2OAz1Dmph248odLEBPmJU-evP9mSTvQ

import React from 'react'
import { useState, useEffect } from 'react';


function YoutubeVideos() {
    let [youTubeVideo, setYouTubeVideo] = useState([]);

    useEffect(() => {
        fetch(
            "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDC2OAz1Dmph248odLEBPmJU-evP9mSTvQ&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
        )
            .then((response) => response.json())
            .then((data) => {
                let youTubeData = data.items;
                setYouTubeVideo(youTubeData);
            })
        }, []);
        // console.log(youTubeVideo);
    return (
        <div className="allVideosWrapper">
            <div className="container">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-12">
                        <div className="title-wraper bold video-title-wrapper">
                            <h1>Latest Videos</h1>
                        </div>
                    </div>
                    {youTubeVideo?.map((singleVideo, i) => {
                        let vidId = singleVideo.id.videoId;
                        let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                        let videoWrapper = (
                            <div key={i} className="col-sm-12 col-md-4">
                                <div className="singleVideoWrapper">
                                    <div className="videoThumbnail">
                                        <a href={vidLink} target="_blank">
                                            <img src={singleVideo.snippet.thumbnails.high.url} />
                                        </a>
                                    </div>
                                    <div className="videoInfoWrapper">
                                        <div className="videoTitle">
                                            <a href={vidLink} target="_blank">
                                                {singleVideo.snippet.title}
                                            </a>
                                        </div>
                                        <div className="videoDesc">
                                            {singleVideo.snippet.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                        return videoWrapper;
                    })}
                </div>
            </div>
        </div>
    );
}
export default YoutubeVideos;
