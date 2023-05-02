import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import RatingStars from '../utils/RatingStars';
import { Link } from 'react-router-dom';

const SearchPlaces = ({ google, countryCode, stateCode, city, location }) => {
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log({ ...location });
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=${process.env.REACT_APP_API_KEY}`;
        // Make the API request
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const result = data.results[0];
                const cityLat = result.geometry.location.lat;
                const cityLng = result.geometry.location.lng;

                // Define the search bounds using the city's latitude and longitude
                const searchBounds = new google.maps.LatLngBounds(
                    new google.maps.LatLng(cityLat - 0.05, cityLng - 0.05),
                    new google.maps.LatLng(cityLat + 0.05, cityLng + 0.05)
                );
                searchPlaces({ lat: cityLat, lng: cityLng, bounds: searchBounds });
            })
            .catch(error => {
                // console.error('Error:', error);
            });
    }
    const searchPlaces = ({ lat, lng, bounds }) => {
        const request = {
            location: { lat, lng },
            radius: 1000,
            query: `car insurance in ${countryCode} ${city}`,
            fields: ['name', 'geometry', 'place_id'],
            componentRestrictions: {
                country: countryCode,
                administrativeArea: stateCode,
                locality: city
            },
            bounds: bounds,
            strictBounds: true,
        };

        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                const filteredResults = results.filter(place => {
                    const addressComponents = place.formatted_address;
                    return addressComponents.toLowerCase().includes(city.toLowerCase());
                });
                setPlaces(filteredResults);
                setIsLoading(false);
            }
            else {
                console.log(results);
                setIsLoading(false);
            }
        });
    }
    return (
        <div className='info-box'>
            {isLoading ? (<div className="loader">Loading...</div>) : (places.map(place => (
                <div key={place.place_id} className='info-box__child'>
                    <Link to={`/${stateCode}/${city}/${place.name.replace(/\s+/g, '-')}`} state={{ placeId: place.place_id }} className='link-anchor'>
                        <div>
                            <img src={place.photos ? `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${place.geometry.location.lat()},${place.geometry.location.lng()}&key=${process.env.REACT_APP_API_KEY}` : ''} alt="icon" />
                        </div>
                        <div>
                            <p>{place.name}</p>
                            <div className='rating-info'>
                                <div>
                                    <RatingStars rating={place.rating} maxRating={5} />
                                    <span>{place.rating}</span>
                                </div>
                                <div>
                                    <span>{place.user_ratings_total} Reviews</span>
                                </div>
                            </div>
                            <div>
                                <p>{place.formatted_address}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )))}
            {(!isLoading && !places.length) && <div>No record found.</div>}
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
})(SearchPlaces);




