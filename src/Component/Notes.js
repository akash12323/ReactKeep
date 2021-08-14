import React, { Component } from 'react'
import Form from './Form';
import './notes.css';
import {v4 as uuid} from 'uuid';

class Notes extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes:[
                {
                    id:uuid(),
                    title:'Demo 1',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id:uuid(),
                    title:'Demo 02',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque quidem porro expedita iusto non recusandae tempore iste vel accusamus assumenda voluptate mollitia impedit debitis necessitatibus, libero a consequuntur laudantium!'
                },
                {
                    id:uuid(),
                    title:'Demo 03',
                    content:'Illum atque quidem porro expedita iusto non recusandae tempore iste vel accusamus assumenda voluptate mollitia impedit debitis necessitatibus, libero a consequuntur laudantium!'
                }
            ]
        }
    }

    createNoteHandler = (note)=>{
        const newNote = {
            ...note,
            id:uuid()
        };
        const newNotes = [
            ...this.state.notes,
            newNote
        ];
        this.setState({notes:newNotes});
    }

    deleteHandler = (id)=>{
        const newNotes = this.state.notes.filter((item)=>
            item.id !== id
        );
        this.setState({notes:newNotes});
    }
  render() {
      const notes = this.state.notes.map((note)=>{
          return <div key={note.id} id={note.id}>
              <h1>{note.title}</h1>
              <p>{note.content}</p>
              <button onClick={()=>this.deleteHandler(note.id)}>DELETE</button>
          </div>
      });
    return (
      <section >
        <Form createNote={this.createNoteHandler}/>
        <section className="section">
        {notes}
        </section>
      </section>
    )
  }
}

export default Notes;