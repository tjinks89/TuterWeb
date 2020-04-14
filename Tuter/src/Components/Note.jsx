import React, { Component } from 'react';
import '../Assets/css/Note.css';
import PropTypes from 'prop-types';

class Note extends Component{

    constructor(props){
        super(props);
        this.email= props.email;
        this.firstName= props.firstName;
        this.lastName= props.lastName;
        this.major= props.major;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
        //console.log(this.ImageArray);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(){
        return(
            <div className="note fade-in">
                <span className="closebtn" 
                      onClick={() => this.handleRemoveNote(this.noteId)}>
                      &times;
                </span>
                <p className="firstName">Tutor: { this.firstName }{ this.lastName }</p>
                <p className="firstName">Email: { this.email }</p>
                <p className="firstName">Major: { this.major }</p>
                
                
            </div>
        )
    }
}

Note.propTypes = {
    email: PropTypes.string
}

export default Note;