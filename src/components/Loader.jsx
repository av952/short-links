import React from 'react'
import style from './loader.module.css'
export const Loader = ({item,id}) => {

    if(item==null){
        return <Container>Loading...</Container>
    }

    if(item== undefined){
        return <Container>Not URL found{id}</Container>
    }

  return (
    <Container>Redirect {item.url}</Container>
  )
}


function Container({children}){
    return(
        <div className={style.loader}>{children}</div>
    )
}