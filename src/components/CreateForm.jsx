import { createContext, useRef, useState } from "react"
import style from './createForm.module.css'

export const CreateForm = ({dispatch}) => {
    const ref = useRef()
    const [url,setUrl] = useState('')
    
    function handleChange(e){
        const value  = e.target.value
        setUrl(value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:'ADD',data:url}) 
        setUrl('')
      
    }

  return (
    <form onSubmit={handleSubmit}>
        <input ref={ref} placeholder="Type a valid URL..." className={style.input} type="text"   value={url} onChange={handleChange}/> 
    </form>
  )
}
