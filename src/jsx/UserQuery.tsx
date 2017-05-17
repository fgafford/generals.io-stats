import * as React from 'react';

interface TypeScriptComponentProps {

}

function handleClick() {
  console.log('Hello World');
}

class App extends React.Component<TypeScriptComponentProps, {}> {
    render() {
        return (<Button onClick={handleClick} bsClass="glyphicon glyphicon-new-window">Click Me!</Button>)
    }
}


ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);