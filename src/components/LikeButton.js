import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      liked: false
    };
  }

  onClick() {
    this.setState({
      count: this.state.count + (this.state.liked ? -1 : 1),
      liked: !this.state.liked
    });
  }

  render() {
    return (
      <div className="container">
        <div
          className="like"
          onClick={() => { this.onClick() }}
        >{this.state.liked ? '✔︎ ' : ''}いいね！</div>
        <div className="counter">
          <span></span>
          {' '}{this.state.count}
        </div>
      </div>
    );
  }
}

export default LikeButton;
