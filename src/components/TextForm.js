import React, {useState} from 'react';


export default function TextForm(props) {

    const handleUpClick = ()=> {
        {/*console.log("Uppercase was clicked" + text); */}
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=> {
        {/*console.log("Uppercase was clicked" + text); */}
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClClick = ()=> {
        {/*console.log("Uppercase was clicked" + text); */}
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=> {
        {/*console.log("On change");*/}
        setText(event.target.value);
    }


    const [text, setText] = useState('Enter text here');
    

  return (
    <>
    <div className="container" style = {{color: props.mode==='dark'?'white':'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='light'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear </button>

    </div>
    <div clssName="container my-3" style = {{backgroundColor: props.mode==='light'?'white':'white' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something in the textbox to preview here "}</p>
    </div>
    </>
  )
}
