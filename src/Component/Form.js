import React, { Component } from 'react'
import './notes.css';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            content:''
        }
    }

    changeHandler = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    submitHandler = (e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.createNote(this.state);
        this.setState({title:'', content:''});
    }

  render() {
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <input name="title" placeholder="Title" onChange={this.changeHandler}
        value={this.state.title}
        />
        <br/>
        <input name="content" placeholder="Take a note..." onChange={this.changeHandler}
        value={this.state.content}
        />
        <br/><br/>
        <button>+</button>
      </form>
    )
  }
}


export default Form;