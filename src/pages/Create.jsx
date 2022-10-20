import { useEffect } from "react"
import { CreateForm } from "../components/CreateForm"
import Item from "../components/Item"
import ItemsContainer from "../components/ItemsContainer"
import { MainContainer } from "../components/MainContainer"
import useReducerApp from "../store/store"

export const Create = () => {
    const[state,dispatch] = useReducerApp()

    useEffect(()=>{
        dispatch({type: 'LOAD'})
    },[])

  return (
    <MainContainer>
        <CreateForm dispatch={dispatch} />

        <ItemsContainer>
            {state?.items.map(el=>(
                <Item el={el} key={crypto.randomUUID()} ></Item>
            ))}
        </ItemsContainer>
    </MainContainer>
  )
}
