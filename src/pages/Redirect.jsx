import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "../components/Loader"
import useReducerApp from "../store/store"

export const Redirect = () => {

  const params = useParams()
  const [item,setItem]= useState(null)
  const [state,dispatch] = useReducerApp()

  useEffect(()=>{
    const data  = localStorage.getItem('urls')
    if(data){
      const  items = JSON.parse(data)
      const id  = params.id

      const itemUrl = items.find(el => el.shortUrl == id)

      if(itemUrl){
        setItem(itemUrl)
        dispatch({type: 'ADD_VIEW',data: id})
        window.location.href = itemUrl.url
      }else{
        setItem(undefined)
      }
    }else{
      setItem(undefined)
    }
  },[])
  return (
    <Loader item={item} id={params.id} ></Loader>
  )
}
