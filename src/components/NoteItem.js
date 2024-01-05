import React, { useContext } from 'react'
import noteContext from '../context/notes/notesContext';

function NoteItem(props) {
  
  const {note,updateNote} = props;

  const context = useContext(noteContext);
  const {deleteNote} = context ; 

//   <div className='container' style={{ borderRadius:'5px', border:'2px solid blue',width:'300px',padding:'15px',margin:'10px 0px' }}>
//   <h4 style={{ wordBreak:'break-word' }}>{note.title}</h4>
//   <p>{note.tag}</p>
//   <p>{note.description}</p>
//   <button className='m-1 p-1 rounded' type='button' onClick={()=>{updateNote(note)}} style={{cursor:'pointer',textAnchor:'start',backgroundColor:'red'}}>	&#x270e;</button>
//   <button className='m-1 p-1 rounded btn-primary' type='button' onClick={()=>{deleteNote(note._id)}} style={{cursor:'pointer',textAnchor:'start',backgroundColor:'red'}}> &#x2716; </button>
// </div>

  return (
    <div className="card my-3">
    <div className="card-header">
      {note.title}
    </div>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <p>{note.description}</p>
        <footer className="blockquote-footer"> {note.tag} <cite title="Source Title"></cite></footer>
      </blockquote>
      <a  onClick={()=>{updateNote(note)}} className="btn btn-success m-1">&#x270e;</a>
      <a  onClick={()=>{deleteNote(note._id)}} className="btn btn-danger m-1">&#x2716;</a>
    </div>
  </div>
  )
}

export default NoteItem