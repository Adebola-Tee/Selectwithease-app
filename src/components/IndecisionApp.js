import React from "react";
import AddOptions from './AddOptions';
import Options from './Options';
import Actions from './Actions';
import Header from './Header';
import OptionModal from "./OptionModal";
export default class IndecisionApp extends React.Component {
  state = {
    options: ["thing one", "thing two", "thing one", "thing one"],
    selectedOption : undefined
  };
   /*  constructor(props) {
      super(props);
   
      this.removeAll = this.removeAll.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.AddOptions = this.AddOptions.bind(this);
      this.removeOneOption = this.removeOneOption.bind(this);
    } */
  deleteSelectedOption = ()=>{
    this.setState(()=>{
      return {selectedOption : ''}
    })
  }
    AddOptions = (anOption) => {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(anOption),
        };
      });
    };
      
    AddOption = (e) =>  {
      e.preventDefault();
      const anOption = document.getElementById("anOption").value.trim();
      if (anOption) {
       this.AddOptions(anOption);
      }
    }
    handlePick = () => {
      const randNum = Math.floor(Math.random() * this.state.options.length);
      const diplayValue = this.state.options[randNum];
      this.setState(()=>{
        return{
          selectedOption : diplayValue
        }
      })
    };
  
    removeAll = () => {
      this.setState(() => {
        return {
          options: [],
        };
      });
    };
  
    removeOneOption = (index) => {
        const updatedOptions = this.state.options.filter((_, i) => i !== index);
        this.setState({ options: updatedOptions });
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

   
    render() {
      const title = "Indecision";
      const subtitle = "The more complex it becomes, the more fun it should be";
  
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <div className="container">
          <Actions hadOptions={this.state.options.length > 0} handlePick={this.handlePick}  />
          <div className="widget">
          <Options options={this.state.options} removeAll={this.removeAll} removeOneOption={this.removeOneOption} />
          <AddOptions AddOptions={this.AddOptions} AddOption={this.AddOption} /></div>
          </div>
         
          <OptionModal selectedOption = {this.state.selectedOption} deleteSelectedOption={this.deleteSelectedOption}/>
        </div>
      );
    }
  }