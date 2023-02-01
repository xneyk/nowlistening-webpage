import header from './header.module.css'
import Image from 'next/image'

export default function Header(){
   return(
      <div className={header.container}>
         <div className={header.logo}>
            <h1 className={header.text}>NowListening</h1>
            <Image 
               alt='Now Listening logo'
               src={'/logo.png'}
               width="42"
               height="34"/>
         </div>
      </div>
   )
}