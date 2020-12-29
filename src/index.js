import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
import faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 6:00pm"
                    content="content1"
                    avatar={faker.image.animals()} />
            </ApprovalCard>
            <CommentDetail
                author="Gregor"
                timeAgo="Today at 2:00am"
                content="content2"
                avatar={faker.image.animals()} />
            <CommentDetail
                author="Stephen"
                timeAgo="Yesterday at 9:00am"
                content="content3"
                avatar={faker.image.animals()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
