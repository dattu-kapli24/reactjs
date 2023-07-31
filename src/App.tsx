import ListGroup from "./components/ListGroup"
import Alert from "./components/Alert"
function App() {
  let items=['Mumbai','Bengaluru','Chennai','Hyderabad'];
  const handleSelectItem=(item:String)=>{
    console.log(item);
  }
 
  return <div>
           <Alert> Hello <span>alert</span></Alert>
    </div>  

}

export default App;
