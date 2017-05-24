/// <reference path="../../node_modules/@types/react/index.d.ts" />
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// interface TypeScriptComponentProps {

// }

// function handleClick() {
//   console.log('Hello World');
// }

// class App extends React.Component<TypeScriptComponentProps, {}> {
//     render() {
//         return (<button onClick={handleClick}>Click Me!</button>)
//     }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('main-menu') as HTMLElement
// );


const Hello = (props: { compiler: string, framework: string }) => {
    return (
        <div>
            <div>{props.compiler}</div>
            <div>{props.framework}</div>
        </div>
    );
}

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("main-menu")
);