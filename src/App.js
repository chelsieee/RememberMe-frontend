import './App.css';
import {AddOrEditEvent} from './component/AddOrEditEvent'
import {EventList} from './component/EventList'

const App =() => {
  const mock =[
    {
        title:'1',
        name:'1',
        eventDate: '1990-1-1'
    },
    {
        title:'2',
        name:'k',
        eventDate: '1990-1-1'
    }
]
  return (
    <div className="App">
      <AddOrEditEvent/>
      <EventList items={mock}/>
    </div>
  );
}

export {App};
