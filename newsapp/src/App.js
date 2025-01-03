import React, { Component } from 'react';
import News from './Components/News';
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {
  pageSize = 10;
apiKey=process.env.REACT_APP_NEWS_API

  // Initialize state
  state = {
    progress: 0
  };

  // Correctly define setProgress
  setProgress = (progress) => {
    this.setState({ progress });
  };

  

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />}
            />
            <Route
              exact
              path="/general"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="us" category="general" />}
            />
            <Route
              exact
              path="/health"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
