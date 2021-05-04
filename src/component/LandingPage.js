import moment from 'moment'
import {Link} from 'react-router-dom'

export const LandingPage = (props) =>{

    const time =()=> {
      let date = moment.utc().format('YYYY-MM-DD h:mm:ss')  
      console.log(date)
      let stillUtc =moment.utc(date).toDate()
      let local =moment(stillUtc).local().format('YYYY-MM-DD h:mm a')
      console.log(local)
      return local
    }

    return (
        <>
        <h1>Good to see you</h1>
        <h2>{time()}</h2>
        </>

    )
}