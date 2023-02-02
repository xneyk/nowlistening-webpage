
import storebutton from './storebuttons.module.css'

export default function StoreButton(props){
   return(
      <button className={storebutton.container}>
         {props.icon}
         <div className={storebutton.textContainer}>
            <p className={storebutton.upText}>{props.upText}</p>
            <h4>{props.downText}</h4>
         </div>
      </button>
   )
}