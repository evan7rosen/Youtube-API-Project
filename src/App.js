import React from "react";
import TopNav from "./Components/TopNav";
import youtube from "./api/youtube";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";
import { Grid } from "semantic-ui-react";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: ""
  };

  searchSubmit = async query => {
    const response = await youtube.get("/search", {
      params: {
        q: query
      }
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <TopNav handleSubmit={this.searchSubmit} />
        <Grid>
          <Grid.Column width={10}>
            <VideoDetail video={this.state.selectedVideo} />
          </Grid.Column>
          <Grid.Column width={6}>
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
