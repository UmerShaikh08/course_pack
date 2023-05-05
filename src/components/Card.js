import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import "./Card.css"
import { toast } from 'react-toastify';


function Card(props, key){
    let course = props.course
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
       
        if(likedCourses.includes(course.id)){
            
            setLikedCourses((prev) =>  prev.filter( (cid)  => (cid !== course.id) ));
            toast.warning("Liked Removed")
        }
        else{

            if(likedCourses.length === 0){
                setLikedCourses([course.id])
            }
            else{
                setLikedCourses( (prev) =>[...prev , course.id])
            }
            toast.success("Liked Successfully")
            console.log(likedCourses.length)
        }
       
    }

    return (
        <div className="card">
            <div>    
                <img width="300px" src = {course.image.url} alt='course.image.alt'></img>
            </div>
            
            <div>
                <button className="logo" onClick={clickHandler}> 
                {
                    likedCourses.includes(course.id) ? (<FcLike></FcLike>) : (<FcLikePlaceholder/>)
                }
                
                </button>
            </div>

            <div className='info'>
                <h3 className="title">{course.title}</h3>
                <p className="description">{`${(course.description).substring(0,100)}...`}</p>
            </div>
        </div>
    )
}

export default Card