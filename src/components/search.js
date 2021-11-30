import React from 'react'
import{Button,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Search({setSearch}) {
    return (
        <div>
              <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setSearch(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form> 
        </div>
    )
}

export default Search
