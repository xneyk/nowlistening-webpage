import infoblock from './infoblock.module.css'

export default function InfoBlock(props) {
   return (
      <div className={props.rightAligned ? infoblock.rightAligned : infoblock.leftAligned}>
         <h4>{props.title}</h4>
         <p>{props.text}</p>
      </div>
   )
}