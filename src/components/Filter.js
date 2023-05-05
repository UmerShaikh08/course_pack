import "./Filter.css"

function Filter( props){
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function clickHandler(title){
        setCategory(title);
    }

    return(
        <div className="filter">
            {filterData.map((ele) => (
              //  return <Button {...ele} key={ele.id}  category = {category} setCategory={setCategory} ></Button>
              <button className={`btn ${category === ele.title ? "active" : "btn"}`}
               
               onClick={() => {clickHandler(ele.title)}} key={ele.id}> {ele.title} </button>
            ))
            }
        </div>
      
    )
}


export default Filter