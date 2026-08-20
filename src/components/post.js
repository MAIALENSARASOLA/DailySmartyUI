import React, { Component } from 'react';

class Post extends Component {
  renderTopics() {
    const associatedTopics = this.props.associated_topics || [];

    return associatedTopics.map((topic, index) => {
      return (
        <span className="post-topic" key={index}>
          {topic}
        </span>
      );
    });
  }

  render() {
    return (
      <li className="recent-post">
        <div className="recent-post__title">
          {this.props.title}
        </div>

        <div className="recent-post__topics">
          {this.renderTopics()}
        </div>
      </li>
    );
  }
}

export default Post;