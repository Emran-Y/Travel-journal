

import data from './data.js'
import Place from './Place.js'
import './App.css';

export default function Main(){
    const places = data.map( item =>{
        return <Place
          title = {item.title}
          location = {item.location}
          googleMapUrl = {item.googleMapsUrl}
          startDate = {item.startDate}
          endDate = {item.endDate}
          description  = {item.description}
          imageUrl = {item.imageUrl}
  />
})

    return(
        <div className = 'big-big'>
            {places}
        </div>
    )


}
