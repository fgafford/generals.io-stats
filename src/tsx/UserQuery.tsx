/// <reference path="../browser.ts" />

interface Props {

}


function handleClick() {
  console.log('Hello World');
}

class MyElem extends React.Component<Props, {}> {
    render() {
        return (<div className="center" style={{width: '80%'}}>
                        <h1 className="main-title">generals.io - stats</h1>
                        <select className="bold" style={{height: '24px', border: 'medium none'}}>
                            <option disabled={true}>Choose a server:</option>
                            <option value="NA" selected={true}>North America (New York)</option>
                            <option value="EU">Europe (Amsterdam)</option>
                            <option value="Bot">Bot Server (San Francisco)</option>
                        </select>
                        <input id="main-menu-username-input" placeholder="Enter Username" type="text" />
                        <br/>
                        <button className="big" style={{margin: '10px'}}>See Stats</button>
                        <br/>
                        <br/>
                        <br/>
                        <p>Plug for GitHub here</p>
                </div>)
    }
}

ReactDOM.render(
    <MyElem />,
    document.getElementById("main-menu")
);

/*const Hello = (props: { compiler: string, framework: string }) => {
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
);*/
