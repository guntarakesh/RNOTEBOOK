import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/notesContext'
import NoteItem from './NoteItem';
import AddNote from './addNote'
import { useNavigate } from 'react-router-dom';

function Notes() {
const context = useContext(noteContext);
const {notes,getNotes,editNote} = context ; 
const navigate = useNavigate();
useEffect(()=>{
   if(localStorage.getItem('token')) 
   {
      getNotes();
   }
   else{
  navigate('/login');
   }
})

const [note,setNote] = useState({id:'',etitle:"",edescription:"",etag:""});

const ref = useRef(null);
const refClose = useRef(null);

const updateNote = (currentNote)=>{
     ref.current.click();
     setNote({id:currentNote._id , etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
}

const handleClick = (e) =>{
    editNote(note.id, note.etitle,note.edescription,note.etag);
    refClose.current.click();
  }

  const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value});
  }


  return (
    <div className='container'>

    
    <AddNote/>
    
    {/* add the boostrap for the modal here and make the trigger button as ref and also add the addNote form here to edit it by user */}

<button ref={ref} type="button" className=" d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Update Note
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <div className="mb-3 m-30">
          <label htmlFor='title' className="form-label">Title</label>
          <input minLength={3} type="text" className="form-control" id="title" name='etitle' placeholder="title" value={note.etitle} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea minLength={6} className="form-control" id="description" rows="3" value={note.edescription} onChange={onChange} name='edescription'></textarea>
        </div>
        <div className="mb-3 m-30">
          <label htmlFor='tag' className="form-label">Tag</label>
          <input minLength={2} type="text" className="form-control" id="tag" name='etag' placeholder="tag" value={note.etag} onChange={onChange} required/>
        </div>
      </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>
<div className='container my-5'>
    <h2>Your Notes</h2>
    {notes.length === 0 && " No Notes to Display"}
<div className='container'>
{
        notes.map((note)=>{
            return <NoteItem key={note._id} updateNote={updateNote} note={note} />
        })
    }
</div>
</div>
    </div>
  )
}

export default Notes