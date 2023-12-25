import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/notesContext'

function AddNote() {
  const context = useContext(noteContext);
  const {addNote} = context ;
  
  const [note,setNote] = useState({title:"",description:"",tag:""});

  const handleClick = (e) =>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    setNote({title:"",description:"",tag:""});
  }

  const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value});
  }
  return (
    <div className='my-3 container'>
      <h3>Add Notes</h3>
      <form role='form' onSubmit={handleClick}>
        <div className="mb-3 m-30">
          <label htmlFor='title' className="form-label">Title</label>
          <input minLength={3} type="text" className="form-control" id="title" name='title' placeholder="title" value={note.title} onChange={onChange} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea minLength={6} className="form-control" id="description" rows="3" value={note.description} onChange={onChange} name='description' required></textarea>
        </div>
        <div className="mb-3 m-30">
          <label htmlFor='tag' className="form-label">Tag</label>
          <input minLength={2} type="text" className="form-control" id="tag" name='tag' placeholder="tag" value={note.tag} onChange={onChange} required/>
        </div>
        <button type="submit" className="btn btn-primary">Add Note</button>
      </form>
    </div>
  )
}

export default AddNote