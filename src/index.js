import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" />
            <CommentDetail author="Gregor" />
            <CommentDetail author="Stephen" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
