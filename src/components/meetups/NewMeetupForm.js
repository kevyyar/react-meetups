import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';


const NewMeetupForm = ({ onAddNewMeetup }) => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const addressRef = useRef(null);
    const imageRef = useRef(null);


    const submitHandler = (event) => {
        event.preventDefault();
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredAddress = addressRef.current.value;
        const enteredImage = imageRef.current.value;

        const meetupData = {
            title: enteredTitle,
            description: enteredDescription,
            address: enteredAddress,
            image: enteredImage
        };

        onAddNewMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id='title' ref={titleRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id='image' ref={imageRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id='address' ref={addressRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup description</label>
                    <textarea id="description" required rows='5' ref={descriptionRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;