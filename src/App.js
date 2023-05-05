import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import Spinner from "./components/Spinner"
import { filterData , apiUrl} from "./data"
import {useState, useEffect} from "react";
import { toast } from "react-toastify"
import './App.css';

function App() {

  const [courses , setCourse] = useState(null);
  const [loading , setLoading ] = useState(true);
  const [category , setCategory] = useState(filterData[0].title)


    const fetchData = async ()=>{
      setLoading(true)
      try {
        let res= await fetch(apiUrl);
        let output = await res.json();
        setCourse(output.data);
      } catch (error) {
        toast.error("somthing went wrong");
      }
      setLoading(false)
    }
    

  useEffect(()=>{
    
    fetchData();
  },[])  
  
  



  return (
    <div className="App">
      <div className="navbar">  
          <Navbar ></Navbar>
      </div>
        
      <div className="filterData">
          <Filter filterData = {filterData} category = {category} setCategory = {setCategory}></Filter>
      </div>

      <div className="cards-container">
          {loading? (<Spinner></Spinner>): ( <Cards courses = {courses} category = {category}></Cards>)}
      </div>

    </div>
  );
}

export default App;
