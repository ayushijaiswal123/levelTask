import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Table} from 'reactstrap';

function App() {
  const [data, setData] = useState([]);
  const getCures=async()=>{
    await axios.get(`http://localhost:5000/cures`)
      .then(function(res) {
        console.log(res)
        setData(res.data)
      return res.json;
    })
      
  }
  useEffect(()=>{
    getCures()
  },[]);

 
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{fontSize:"40px",color:"royalblue"}}>DISEASES AND CAUSES</h1>
       </header>
       <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cause</th>
              <th>Antidote</th>
            </tr>
          </thead>
          <tbody>
        {data.map((item,index)=>{
         return(
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.cause}</td>
          <td>{item.antidote}</td>
        </tr>
         )
        
})}
          </tbody>
        </Table>
    </div>
  );
}

export default App;