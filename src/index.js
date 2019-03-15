import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail imageSource={faker.image.avatar()} author="Sam" timeAgo="Today at 4:45PM" commentBody="Nice blog post!"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail imageSource={faker.image.avatar()} author="Alex" timeAgo="Today at 2:00AM" commentBody="Medium blog post!"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail imageSource={faker.image.avatar()} author="Jane" timeAgo="Yesterday at 5:00PM" commentBody="Poor blog post!"/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
