import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
import faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 6:00pm"
                    content="content1"
                    avatar={faker.image.animals()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Gregor"
                    timeAgo="Today at 2:00am"
                    content="content2"
                    avatar={faker.image.animals()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Stephen"
                    timeAgo="Yesterday at 9:00am"
                    content="content3"
                    avatar={faker.image.animals()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
