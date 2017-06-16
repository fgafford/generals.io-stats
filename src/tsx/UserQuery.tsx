/// <reference path="../browser.ts" />

interface Props {}

class UserQuery extends React.Component<Props, any> {

    // valid: boolean =  false;

    constructor(){
        super()
        this.state = { valid: false };
    }

    query(server: string, username: string){
        const self = this;
        Rx.DOM.ajax(`http://${server}/api/validateUsername?u=${encodeURIComponent(username)}`)
                .subscribe(data => this.setState({ valid: data.response === 'true' }));
    }

    render() {
        return (<div className="center" style={{width: '80%'}}>
                        <h1 className="main-title">generals.io - stats</h1>
                        <select id="server-select" className="bold" style={{height: '24px', border: 'medium none'}}>
                            <option disabled={true}>Choose a server:</option>
                            <option value="generals.io" selected={true}>North America (New York)</option>
                            <option value="eu.generals.io">Europe (Amsterdam)</option>
                            <option value="bot.generals.io">Bot Server (San Francisco)</option>
                            <option value="localhost:3000">localhost (testing)</option>
                        </select>
                        <input id="main-menu-username-input" placeholder="Enter Username" type="text" 
                        onChange={e => this.query($('#server-select').val(), $('#main-menu-username-input').val()) }/>
                        <br/>
                        <button id="showStats" className={"big " + (this.state.valid ? '' : 'disabled')} disabled={this.state.valid} style={{margin: '10px'}}>See Stats</button>
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
