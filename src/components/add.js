import {useState} from 'react'

import { Modal,Button  } from 'react-bootstrap';

function Add({Movies,setMovies}) {
  const [show,setShow]=useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title ,settitle]=useState("")
  const [description ,setdescription ]=useState("")
  const [poster ,setposter ]=useState("")
  const [rating ,setrating ]=useState(0)
  const Add=()=>setMovies( [...Movies,{title,description,poster,rating }])
  return (
    < div className='add'>
      <Button variant="primary" onClick={handleShow}>
        ADD MOVIE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD MOVIE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='col'>
                <h6>TITLE </h6>
        <input type="text"  onChange={(event)=>settitle(event.target.value)}/>
        <h6>DESCRIPTION</h6>
        <input type="text" onChange={(event)=>setdescription(event.target.value)}/>
        <h6> POSTRE</h6>
        <input type="url" onChange={(event)=>setposter(event.target.value)}/>
        <h6> rating</h6>
        <input type="number " onChange={(event)=>setrating(event.target.value)}/>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ANNULER 
          </Button>
          <Button variant="primary" onClick={Add}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}




        


export default Add
