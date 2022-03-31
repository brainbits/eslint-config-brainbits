import React from 'react';

const title = 'test';
const children = {};
const condition = true;

function testFunc() {
    let index = 0;
    if (index === 0) {
        index += 1;
    }
}

const Main = () => (
    <div>
        <span
                title={title}
                leftIcon="menu"
                text={title}
        >
            <h1>Title</h1>
        </span>
        {
            condition &&
            <div>content</div>
        }
        <div>{children}</div>
        {testFunc}
    </div>
);

export default Main;
