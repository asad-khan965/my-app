import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
       
        let newText=text.toUpperCase()
        setText(newText);
        props.showAlert('converted To Uppercase','success')
    }
    const handlelowclick=()=>{
        
        let newText=text.toLowerCase()
        setText(newText);
        props.showAlert('converted To Lowercase','success')
    }
    const handleonchange=(event)=>{
        
        setText(event.target.value)
    }

    const handlecopy=()=>{
        var text = document.getElementById('my-box');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text copied','success')
        
    }
    const handleExtraSpaces=()=>{
       let newText= text.split(/[ ]+/)
       setText(newText.join(' '))
       props.showAlert('Extra spaces removed','success')
    }
    const handleclear=()=>{
        
        setText('')
        props.showAlert('Text cleard','success')
    }

    const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color :props.mode==='dark'?'white':'#031837'}}>
        <h1>{props.head}</h1>
        <div className='mb-3'>
      
        <textarea className='form-control' onChange={handleonchange}  style={{backgroundColor :props.mode==='dark'?'grey':'white'}}  value={text} id='my-box' rows='8'></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleupclick}>Upper case</button>
        <button className='btn btn-primary mx-2' onClick={handlelowclick}>Lower case</button>
        <button className='btn btn-primary mx-2' onClick={handlecopy}>Copy</button>
       
       <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       <button className='btn btn-primary mx-2' onClick={handleclear}>Clear</button>


    </div>
    <div className="container my-3 "  style={{color :props.mode==='dark'?'white':'#031837' }} >
        <h2>Your text summary</h2>
        <p> {text.split(' ').length} and {text.length}</p>
        <p> {0.008*text.split(' ').length} mints read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the text box above to preview it here'}</p>
    </div>
  
    </>
  )
}
