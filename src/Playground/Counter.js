class Counter extends React.Component{
constructor(props){
super(props);
this.Add = this.Add.bind(this);
this.Reduce = this.Reduce.bind(this);
this.Reset = this.Reset.bind(this);
this.state = {
    count : 0
};
}


componentDidMount(){
const stringCount = localStorage.getItem('count');
const count = parseInt(stringCount, 10);

if (!isNaN(count)){
 this.setState({
    count : count
 })
}

}


componentDidUpdate(prevProps, prevState) {
 if (prevState.count !== this.state.count){
   localStorage.setItem('count', this.state.count);
 }
}

Add(){
this.setState ((prevState)=>{
   return {
    count: prevState.count + 1
   };
});
}

Reduce(){
    this.setState((prevState)=>{
return{
    count : prevState.count - 1
}
    });
    }
    
Reset(){
    this.setState(()=>{
        return{
          count : 0
        }
    })
    }

render(){
return(
    <div>
    <h1>Count: {this.state.count}</h1>
    <button onClick={this.Add}>+1</button>
    <button onClick={this.Reduce}>-1</button>
    <button onClick={this.Reset}>Resset</button>
    </div>
);
}
}
ReactDOM.render(<Counter/>, document.getElementById('app'));

/* let count = 0;
function addOne(){
    count++;
    renderApp();
    
};
function minusOne(){
    count--;
    renderApp();
};
function reset(){
    count = 0;
    renderApp();
};
const appRoot = document.getElementById("app");
const renderApp = () =>{
    const addTemplate = (<div>
        <h1>Count : {count}</h1>
        <button onClick = {addOne} >+1</button>
        <button onClick = {minusOne} >-1</button>
        <button onClick = {reset} >Reset</button>
        </div>);

        ReactDOM.render(addTemplate, appRoot);
}


renderApp(); */