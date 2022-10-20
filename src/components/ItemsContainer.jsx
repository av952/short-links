import style from './itemsContainer.module.css'

export default function ItemsContainer({children}){
    return(
        <div className={style.items}>
            {children} 
        </div>
    )
}