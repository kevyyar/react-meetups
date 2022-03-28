import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [meetups, setMeetups] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMeetups = async () => {
        try {
            setIsLoading(true);
            const url = 'https://react-meetups-66164-default-rtdb.firebaseio.com/meetups.json';
            const response = await fetch(url);
            const responseData = await response.json();
            const loadedMeetups = [];
            for (const key in responseData) {
                loadedMeetups.push({
                    ...responseData[key],
                    id: key,
                });
            }
            setIsLoading(false);
            setMeetups(loadedMeetups);
        } catch (error) {
            setError(error);
            console.log(error);
        }
    };


    useEffect(() => {
        fetchMeetups();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }


    return (
        <div>
            <MeetupList meetups={meetups} />
        </div>
    )
}

export default AllMeetupsPage;