/// <reference path="../browser.ts" />

interface Props {}

class UserQuery extends React.Component<Props, any> {

    server: string = 'NA';
    haveValidUser: boolean =  false;

    query(server: string, username: string){
        Rx.DOM.ajax(`http://${server}/api/validateUsername?u=${username}`)
                .subscribe(data => console.log(data));

    }

    setServer(event: any){  
        this.server = event.target.value;
        this.forceUpdate();
    }

    render() {
        return (<div className="center" style={{width: '80%'}}>
                        <h1 className="main-title">generals.io - stats</h1>
                        <select onChange={e => this.setServer(e)} className="bold" style={{height: '24px', border: 'medium none'}}>
                            <option disabled={true}>Choose a server:</option>
                            <option value="generals.io" selected={true}>North America (New York)</option>
                            <option value="eu.generals.io">Europe (Amsterdam)</option>
                            <option value="bot.generals.io">Bot Server (San Francisco)</option>
                            <option value="localhost:3000">localhost (testing)</option>
                        </select>
                        <input id="main-menu-username-input" placeholder="Enter Username" type="text" />
                        <div>Selected: {this.server}</div>
                        <br/>
                        <button onClick={e => this.query(this.server, 'test') } className="big" style={{margin: '10px'}}>See Stats</button>
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
