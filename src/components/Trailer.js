import React from 'react'

function Trailer(props) {
    const Tr= props.Movies.find((el)=> el.id == props.match.params.id );
    
    
    return (
        <div>
            <h1>{Tr.description }</h1>
            <iframe src={Tr.trailerlink}></iframe>

            <button onClick={() => props.history.goBack()}>Go Back</button>
           <button onClick={() => props.history.push("/")}>Home</button>
        </div>
    )
}

export default Trailer
