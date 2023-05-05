import Card from "./Card";
import "./Cards.css"
import {useState} from "react"

function Cards(props){
   
    let courses = props.courses;
    const [likedCourses , setLikedCourses] = useState([])
    let category = props.category;

    function getCourses (){
      if(category === "All")  
      {
        let allCourses = [];
        Object.values(courses).forEach(array=>{
       
            array.forEach((courseData)=>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
      }
      else{
         return courses[category]
      }
    }
     
    return(
        <div className="cards">      
            {
            getCourses().map((course)=>{
            return<Card course={course} key = {course.id} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses} ></Card>
            })} 
        </div>
    )
}


export default Cards