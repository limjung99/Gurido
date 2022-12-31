import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import "./App.css"

function Map(props){
  const rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  const cols = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

  return (
   <div className="board">
      {rows.map((r,index)=>(
        r%2==1?
         <div className="row">
            {cols.map((c,index2)=>(
                c%2==1? <Square row={r} col={c} /> : <VerticalWall row={r} col={c}/>
            ))}
         </div>     
         :
         <div className="row">
            {cols.map((c,index2)=>(
                c%2==1? <HorizontalWall row={r} col={c} /> : <Mini row={r} col={c}/>
            ))}
         </div>  
      ))
      }
  </div>
  )
 
}

function Mini(props){
  return(
    <button className="mini" onClick={()=>(alert("hi"))}>

    </button>
  )
}

function Square(props){
  return (
    <button className="square" onClick={()=>(alert(String(props.row)+String(props.col)))}>
      {props.row}
      &nbsp;
      {props.col}
    </button>
  )
}

function VerticalWall(props){
  return (
    <button className="vertical" onClick={()=>(alert("clicked"))}>
      
    </button>

  )
}

function HorizontalWall(props){
  return (
    <button className="horizontal" onClick={()=>(alert("clicked"))}>
      
    </button>

  )
}



function App() {
  return (
    <div className="App">
      <Map/>
    </div>
  );
}



export default App;
