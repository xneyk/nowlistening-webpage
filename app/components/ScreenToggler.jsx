import button from './screentoggler.module.css'

export default function ScreenToggler() {
   return (
      <div className={button.container}>
         <button className={button.active}>
            <p className={button.text}>Photo&Music Post</p>
         </button>
         <button className={button.button}>
            <p className={button.text}>Opinion Forum</p>
         </button>
         <button className={button.button}>
            <p className={button.text}>Keep a Gallery</p>
         </button>
      </div>
   )
}