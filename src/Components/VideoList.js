import React from "react";
import VideoItem from "./VideoItem";
import { Item } from "semantic-ui-react";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map(video => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
  });
  return <Item.Group>{videoList}</Item.Group>;
};

export default VideoList;
