import React, {useEffect,useRef} from 'react'
import Codemirror from 'codemirror'
import 'codemirror/lib/codemirror.css';      
import 'codemirror/theme/dracula.css';         
import 'codemirror/addon/edit/closebrackets';  
import 'codemirror/addon/edit/closetag';
const Editor = () => {
const editorRef=useRef(null);


  useEffect(()=>{
   
          if(editorRef.current){

          Codemirror.fromTextArea(editorRef.current,{
            mode:{name:'javascript', json:true},
            theme:'dracula',
            autoCloseTags:true,
            autoCloseBrackets:true,
            lineNumbers:true,

          })
        }
  

  },[])
  return (
    <textarea ref={editorRef}></textarea>
  )
}

export default Editor
