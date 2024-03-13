class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        options: ["thing one", "thing two", "thing one", "thing one"],
      };
      this.removeAll = this.removeAll.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.AddOptions = this.AddOptions.bind(this);
      this.removeOneOption = this.removeOneOption.bind(this);
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
      if (options){
        this.setState(
            {options : options}
            ) 
      }        
        }    
        catch(e){

        }    
    }  

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json =JSON.stringify(this.state.options) ;
            localStorage.setItem('options', json);
            console.log('saving data')
        }
    }  

    componentWillUnmount(){

    }

    AddOptions(anOption) {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(anOption),
        };
      });
    }
  
    handlePick() {
      const randNum = Math.floor(Math.random() * this.state.options.length);
      const diplayValue = this.state.options[randNum];
      alert(diplayValue);
    }
  
    removeAll() {
      this.setState(() => {
        return {
          options: [],
        };
      });
    }
  
    removeOneOption(index) {
        const updatedOptions = this.state.options.filter((_, i) => i !== index);
        this.setState({ options: updatedOptions });
      }
      
  
    render() {
      const title = "Indecision";
      const subtitle = "The more complex it becomes, the more fun it should be";
  
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Actions hadOptions={this.state.options.length > 0} handlePick={this.handlePick} />
          <Options options={this.state.options} removeAll={this.removeAll} removeOneOption={this.removeOneOption} />
          <AddOptions AddOptions={this.AddOptions} />
        </div>
      );
    }
  }
  
  class Header extends React.Component {
    render() {
      console.log(this.props);
  
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h1>{this.props.subtitle}</h1>
        </div>
      );
    }
  }
  
  class Actions extends React.Component {
    render() {
      return (
        <div>
          <button onClick={this.props.handlePick} disabled={!this.props.hadOptions}>
            What do I do?
          </button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
    render() {
      return (
        <div>
          <p>{this.props.options.length}</p>
          {this.props.options.map((arr, index) => {
            return (
              <div key={index}>
                <p>{arr.toUpperCase()}</p>
                <button onClick={() => this.props.removeOneOption(index)}>Remove</button>
              </div>
            );
          })}
          {this.props.options.length === 0 && <p>Please add an option to get started</p>}
          <button onClick={this.props.removeAll}>Remove All</button>
        </div>
      );
    }
  }
  
  class AddOptions extends React.Component {
    constructor(props) {
      super(props);
      this.AddOption = this.AddOption.bind(this);
    }
  
    AddOption(e) {
      e.preventDefault();
      const anOption = document.getElementById("anOption").value.trim();
      if (anOption) {
        this.props.AddOptions(anOption);
      }
    }
    render() {
      return (
        <div>
          <form onSubmit={this.AddOption}>
            <input id="anOption" type="text" name="option" />
            <button>Add Options</button>
          </form>
        </div>
      );
    }
  }
  
  const jsx = (
    <div>
      <h1>Title</h1>
      <IndecisionApp />
    </div>
  );
  ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
  