import React from "react";
import { Segment, Header, Image, Dimmer, Loader } from "semantic-ui-react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader inverted>Select a Video</Loader>
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Segment>
      <div className="ui embed">
        <iframe src={videoSrc} />
      </div>
      <Header as="h4">{video.snippet.title}</Header>
      <p>{video.snippet.description}</p>
    </Segment>
  );
};

export default VideoDetail;
