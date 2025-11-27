import header from './header.module.css'
import Image from 'next/image'

export default function Header(){
   const basePath = 'nowlistening-webpage/'; // used for GitHub Pages Production Version

   return(
      <div className={header.container}>
         <button className={header.logo}>
            <h1 className={header.text}>NowListening</h1>
            <Image 
               alt='Now Listening logo'
               src={`/${basePath}logo.png`}
               width="42"
               height="34"/>
         </button>
      </div>
   )
}