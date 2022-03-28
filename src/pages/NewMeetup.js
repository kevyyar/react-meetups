import { useNavigate } from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm";

// navigate("/", { replace: true });
function NewMeetupPage({ meetup }) {

    const navigate = useNavigate();

    const addMeetupHandler = (meetup) => {
        fetch('https://react-meetups-66164-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                navigate("/", { replace: true });
            })
            .catch(error => {
                console.log(error);
            });

    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddNewMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage;