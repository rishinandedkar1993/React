import React from 'react';    {/* importing React from react library */}

const person = (props) =>{
  return(
    <div>
      <p>I am {props.name} and I am {props.age} years old.</p>    {/* dynamic binding */}
      <p>{props.children}</p>
    </div>
  )
};

export default person;  {/* making this component available to other components by exporting it */}
