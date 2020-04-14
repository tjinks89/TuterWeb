import React, { Component } from 'react';
import '../Assets/css/Note.css';
import PropTypes from 'prop-types';

class Note extends Component{

    constructor(props){
        super(props);
        this.ImageArray = props.ImageArray; 
        this.noteId = props.noteId; 
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
        console.log(this.ImageArray);
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
                <p className="firstName">{ this.ImageArray }</p>
            </div>
        )
    }
}

Note.propTypes = {
    ImageArray: PropTypes.array
}

export default Note;