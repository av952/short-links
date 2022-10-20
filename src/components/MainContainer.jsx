import style  from './maincontainer.module.css'

export const MainContainer = ({children}) => {
  return (
    <div className={style.mainContainer}>
        {children}
    </div>
  )
}
