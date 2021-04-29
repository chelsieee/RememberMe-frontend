import moment from 'moment'
import {useState} from 'react'
import {Link} from 'react-router-dom'
export const EventList = (props) => {  
  const [checkList, setCheckList]=useState([])
  const testEvents =props.events.map((el)=>{return {...el, checked: false}})
  
  const handleClick = (e) => {
    
    console.log('element selected: ', e.target.value);
    if (!e.target.value) {
      e.target.value = true;  
    }
    else { 
      e.target.value = false;
    }
    
    console.log("e.target.id", e.target.id)
    // does this id exist in the list of ids to be deleted
    const findIndex = checkList.indexOf(e.target.id);
  console.log('findindex', findIndex)

    if (findIndex < 0) { 
      setCheckList([...checkList, e.target.id])
    }else{
      console.log(findIndex)
      const newCheckList= checkList
      newCheckList.splice(findIndex, 1)
      setCheckList(newCheckList)
    }
  }
  console.log('checklist: ', checkList)

    return (
      <div>
      <Link to ={'/events/add'}>
      <button>New Event</button>
    </Link>
    <button onClick={()=>props.handleDelete(checkList)}>Delete</button>
        <div>
      <ul>
            {testEvents.map((el, index) => (
          <div key={el.id}>
             <input 
            type="checkbox"
            id={el.id}
            key={index}
            onClick={handleClick}
            value={el.checked}
                />
            <Link to = {`/events/edit/${el.id}`} >
          <span key={el.id}>
          Days Since {el.title} -{moment(el.eventDate).toNow(true)} -with {el.name} -{el.eventDate}     
          </span>
        </Link>
          </div> 
        ))}
      </ul>
      </div>
      </div>
    );
};
