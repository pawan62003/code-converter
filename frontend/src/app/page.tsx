import Main from "./components/home"
export default function Home() {
  return (
    <main>
      <div style={{textAlign:'center',fontSize:'24px'}} className="h-10 bg-purple-400 font-bold from-neutral-300">
        this is a code converter app. here you can convert,debug and quality check for the code in any Language.  <a style={{color:"blue"}}>Built by Pawan kumar ✌️✌️</a>
      </div>
      <Main />
      <div style={{fontSize:'25px',color:"white"}} className="h-11 w-80 text-center caret-green-500 rounded-full m-auto mt-6 bg-red-500">
        Happy Coding !!! ✌️✌️
      </div>
    </main>
  )
}

