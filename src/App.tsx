import ListGroup from "./components/ListGroup"
import Alert from "./components/Alert"
import Button from "./components/Button";
function App() {
  let items=['Mumbai','Bengaluru','Chennai','Hyderabad'];
  const handleSelectItem=(item:String)=>{
    console.log(item);
  }
 
  return <div>
           <Alert> Hello <span>alert</span></Alert>
           <br></br>
           <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup>
           <br></br>
           <Button onClick={()=>console.log("Clikecd")}>My Button</Button>
    </div>  

}

export default App;
