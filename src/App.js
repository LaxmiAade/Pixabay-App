import {useEffect,useState} from 'react'
import './SearchFiter/Pixabay.css'

const App = () => {
  const[data,setData]=useState([])
  const[search,setSearch]=useState("")
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=40364224-c7fe31c9713fbb15516ea6f2e&q=${search}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(d=>setData(d.hits))
  },[data])
  return (
    <div className="App">
      <main>
       <section className='Navbar'>
         <nav className="navbar">
          <div><ruby>📸 PIXABAY<rt><i class="fa-solid fa-camera"></i></rt></ruby></div>
           <ul className='navlist'>
             <li><div><a href="/">Explore</a></div></li>
             <li><div><a href='/'>🔔</a></div></li>
             <li><div><button id='btn1'><i class="fas fa-sign-in"></i>Log in</button></div></li>
             <li><div><button id='btn1'>Join</button></div></li>
             <li><div><button id='btn2'><i class="fa-solid fa-arrow-up-from-bracket"></i>⬆ Upload</button></div></li>
            </ul>
       </nav>
       </section>
       <section className='Header'>
       <center><h1>Stunning royalty-free images & royalty-free stock</h1></center>
       <center><h3>Over 4.1 million hign quality images,videos and music shared by talented community.</h3></center>
       <center><input type="text" placeholder='Search Image here What do you want' onChange={(e)=>{setSearch(e.target.value)}}/></center>
       </section>
       </main>
      
  {data.map((x)=>{
        return(
          <section key={x.type} className='secimg'>

            <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth}alt="" />
          </section>
        )
      })}
    </div>
  )
}
export default App