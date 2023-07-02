import React,{useState} from 'react'


export default function TextUtils(props) {
    
    const handleonchange =(event)=>{
        setText(event.target.value);
    }
    const handleOnClick =()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const [text,setText] = useState("");
  return (
    <div className='container'>
        <h1>{props.heading}</h1>
    
       <textarea className="form-control" value={text} onChange={ handleonchange} id="myBox" cols="30" rows="10"></textarea>
  <div>
  
   <button type="submit" onClick={handleOnClick} className="btn btn-primary">Change to uppercase</button>
   
   <div className='container my-2 mx-0'>
      <h2> text summary here: </h2>
      
      <p>{text.split(" ").length} words , {text.length} characters</p>
   </div>

  
  </div>
    
    </div>
  );
}
