import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAT8tpxp3gquhNwMkWf9AWLqtqvGs2z6NU';

// Create a new component which produces some HTML
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    //to get some videos on rebooting the app
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange = { videoSearch } />
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList
          onVideoSelect = { selectedVideo => this.setState({selectedVideo : selectedVideo })}
          videos = { this.state.videos }/>
      </div>
    );
  }
}

// THIS component's generated HTML and PUT IT ON THE PAGE (IN THE DOM)
ReactDOM.render(<App />, document.getElementById('app'));
