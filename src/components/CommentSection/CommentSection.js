// https://jsonplaceholder.typicode.com/comments
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CommentSection = () => {
  const [comments, setComments] = useState();
  const [page, setPage] = useState(1);
  const username = useSelector(state => state.username);

  axios.get('https://jsonplaceholder.typicode.com/comments').then(response => {
    setComments(response.data);
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (username && comments) {
    const slicedComments = comments.slice((page - 1) * 10, page * 10);

    return (
      <div className='commentsection'>
        <h3>Comments:</h3>
        {slicedComments &&
          slicedComments.map((comment, index) => {
            return (
              <div key={'comment' + index} className='commentsection-card'>
                <p className='commentsection-card--name'>
                  <strong>Name:</strong> {comment.name}
                </p>
                <p className='commentsection-card--email'>
                  <strong>E-mail:</strong>{' '}
                  <a href={'mailto: ' + comment.email}>{comment.email}</a>
                </p>
                <p className='commentsection-card--body'>
                  <strong>Message:</strong>
                  <br />
                  {comment.body}
                </p>
              </div>
            );
          })}
        <a onClick={prevPage} href='#'>
          Previous Page
        </a>
        <a onClick={nextPage} href='#'>
          Next Page
        </a>
      </div>
    );
  } else {
    return (
      <div className='commentsection'>
        <h3>Log in to see your comments!</h3>
      </div>
    );
  }
};

export default CommentSection;
