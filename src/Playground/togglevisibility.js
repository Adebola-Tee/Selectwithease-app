class Visibility extends React.Component{
   constructor(props){
    super(props);
    this.hideOrShow = this.hideOrShow.bind(this);
    this.state = {
        visibility : true
    }

   }
   
  
  hideOrShow(){
    this.setState((prevState)=>{
        return {
visibility : !prevState.visibility
        }
    })
  }
    render(){
        return (
            <div>
             <Title/>
            <button onClick={this.hideOrShow}  id='btn'>{this.state.visibility ? 'Show details' : 'Hide details'}</button>
            {this.state.visibility &&(<div> <p>Lot of love</p></div>)}
            </div>
        )
    }
}

class Title extends React.Component{
    render(){
        return (
            <div>
            <h1>Visibility Toggle</h1>
            </div>
        )
    }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));



/* let visibility = true;
function hideOrShow() {
    let theButton = document.getElementById('btn');
    visibility = !visibility;
    if (visibility){
        theButton.textContent ='Show Details';
    }
        else{
            theButton.textContent ='Hide Details';
        }
    }
const appRoot = document.getElementById('app');
const renderApp = () => {
    const toggle = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={hideOrShow}  id='btn'>Hide Details</button>
        </div>
    );
ReactDOM.render(toggle, appRoot);
};

renderApp(); */