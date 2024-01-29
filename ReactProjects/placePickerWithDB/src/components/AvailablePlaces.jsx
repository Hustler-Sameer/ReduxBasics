import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import {sortPlacesByDistance} from "../loc.js";

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching , setIsFetching ] = useState(false);
  const [error , setError] = useState();

  // using isFetching to show fallback text so that user gets to see fallback untill the data is fetched and loaded

  const fetchFunction = async () => {

    setIsFetching(true);

    try {
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();
      if(!response.ok) {
        throw new Error("Failed to fetch data");
      }

      navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces = sortPlacesByDistance(resData.places , position.coords.latitude , position.coords.longitude);
        setAvailablePlaces(sortedPlaces);
        setIsFetching(false);
      });

      // setAvailablePlaces(resData.places);
    } catch (error) {

      setError(error);
      // .. we will code the fallback error here

      setIsFetching(false);
    }
    
  }
  // this is GET request
  useEffect(() => {
   

    fetchFunction();


    // fetch('http://localhost:3000/places').then((response) => {
    //  // console.log(response.json());

    //   return response.json();
    // }).
    // then((resData) => {
    //   setAvailablePlaces(resData.places);
    // //  console.log(resData.places)
    // });
    
  }, [])



  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching data components ...."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
