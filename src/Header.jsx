
import Nav from "./Nav"
function Header({setsearchquery}) {
  let darkmode=()=>{
      document.body.classList.toggle('toglemode')
    }



  return (
    <>
    <header style={{display:"flex", 
      justifyContent: "center",
      justifyContent:"space-evenly"}}>
    <img src="src/assets/vite.svg" alt="" />
    <input   onChange={(e)=>{setsearchquery(e.target.value)}}
    width={250} type=" "/>
     <Nav/>
      <img onClick={darkmode}   height={50} width={50}  src="https://www.svgrepo.com/show/309493/dark-theme.svg" alt="" ></img>
    </header>
    </>
  )
}

export default Header
