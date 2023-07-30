import React from 'react';
import Search from './search';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list'
import VideoDetail from './video_detail';
import debounce from 'lodash/debounce';

const API_KEY = process.env.REACT_APP_KEY;

export default class Container extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        videos: [],
        selectedVideo: null
    };

    this.handleInputThrottled = debounce(this.videoSearch, 1500) // this is debouncing
}

videoSearch(searchTerm) {
  if(searchTerm){
    YTSearch({key: API_KEY, term: searchTerm}, (data) => {
      console.log(data);
        this.setState({
            videos: data,
            selectedVideo: data[0]
        });
    })
  }
}

  render() {
    return (
      <div className="container-fluid">
        <Search onSearchTermChange={
            searchTerm => this.handleInputThrottled(searchTerm)
        }/>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
            videos={this.state.videos} />
        </div>    
      </div>
    );
  }
}