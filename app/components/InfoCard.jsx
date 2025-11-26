import infocard from './infocard.module.css'

export default function InfoCard(props) {
   return (
      <div className={infocard.container}>
         <h4>{props.title}</h4>
         <p>{props.text}</p>
      </div>
   )
}