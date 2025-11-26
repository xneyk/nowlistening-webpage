import { toast } from 'react-toastify'
import biginput from './biginput.module.css'


export default function BigInput(props) {
   const regexEmail = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;

   return(
      <input
         id = {props.id}
         className={biginput.inputStyle}
         type = {props.type}
         placeholder = {props.placeholder}
         onKeyDown={(event) => {
            if (event.key === 'Enter') {
               if (event.target.value.length > 0 && regexEmail.test(event.target.value)) {
                  toast.success("Cool! We'll contact U mate:)!");
               } else {
                  toast.warn("Don't try to troll me :(");
               }
            }
         }}
      />
   )
}