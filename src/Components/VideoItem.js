import React from "react";
import { Item } from "semantic-ui-react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Item
      key={video.id}
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <Item.Image size="small" src={video.snippet.thumbnails.medium.url} />
      <Item.Content>
        <Item.Header as="a">{video.snippet.title}</Item.Header>
      </Item.Content>
    </Item>
  );
};

export default VideoItem;
