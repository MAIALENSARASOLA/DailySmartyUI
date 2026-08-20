import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Post from './post';

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }

 renderPosts() {
  const posts = this.props.recentPosts.map((post, index) => {
    if (index < 3) {
      return <Post key={index} {...post} />;
    }
  });

  return posts;
}

  render() {
    console.log(this.props.recentPosts);

    return (
      <div>
        <div>
          Recent Posts

          <ul className="recent-posts__posts">
            {this.renderPosts()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recentPosts: state.posts.recentPosts
  };
}

export default connect(mapStateToProps, actions)(RecentPosts);