/// <reference path="../browser.ts" />

interface Props {}

class UserQuery extends React.Component<Props, any> {

    server: string = 'NA';
    haveValidUser: boolean =  false;

    setServer(event: any){  
        this.server = event.target.value;
        this.forceUpdate();
    }

    render() {
        return (<div className="center" style={{width: '80%'}}>
                        <h1 className="main-title">generals.io - stats</h1>
                        <select onChange={e => this.setServer(e)} className="bold" style={{height: '24px', border: 'medium none'}}>
                            <option disabled={true}>Choose a server:</option>
                            <option value="NA" selected={true}>North America (New York)</option>
                            <option value="EU">Europe (Amsterdam)</option>
                            <option value="Bot">Bot Server (San Francisco)</option>
                            <option value="LH">localhost (testing)</option>
                        </select>
                        <input id="main-menu-username-input" placeholder="Enter Username" type="text" />
                        <div>Selected: {this.server}</div>
                        <br/>
                        <button className="big" style={{margin: '10px'}}>See Stats</button>
                </div>)
    }
}

ReactDOM.render(
    <UserQuery />,
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
