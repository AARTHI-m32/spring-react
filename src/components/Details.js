import { useState } from "react";

const Details = ({details,handleDelete}) => {
   

    return(
        <>
        <div>     
            <h2>User Details</h2>
           { (details.length>0) ? details.map((i,id) => (
                  <div key={id} className="ndetails">
                    <p>username : {i.name}</p>
                    <p>email : {i.email}</p>
                    <button onClick={() => handleDelete(i.id)}>Delete</button>
                    </div>
            )):
            <p>No details found</p>}
        </div>
     
        </>
    )
}

export default Details