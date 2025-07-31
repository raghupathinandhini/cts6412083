import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  componentDidMount() {
    // Load from local file served by CRA dev server
    fetch('/posts.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load local posts.json');
        return res.json();
      })
      .then((data) => this.setState({ posts: data }))
      .catch((err) => this.setState({ error: err.message }));
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <h2 style={{ color: 'red' }}>Error: {error}</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((p) => (
            <div key={p.id} className="post-card">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Posts;
