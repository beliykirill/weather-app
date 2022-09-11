import React, {useEffect, useState} from "react";
import './App.css';

function App() {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0)

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=ea18091b3e1b37217e06967d496635a2`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }
        fetchData()
    }, [lat, long]);
    return (
        <div>

        </div>
    );
}

export default App;
