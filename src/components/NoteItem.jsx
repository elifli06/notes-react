import React from 'react'
import { Link } from 'react-router-dom';

const NoteItem = ({note}) => {
  console.log(note);
  return <Link to={`/edit-note/${note.id} `} className='note'>
<h4>
  {note.title.lenght>5 ? note.title.substr(0,5)+"...": note.title}
</h4>
<p>{note.date}</p>
  </Link>;
   
  
};

export default NoteItem