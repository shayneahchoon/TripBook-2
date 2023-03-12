import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Flight.css';

const SaveFlight = () => {
    const params = useLoaderData();
    console.log(params);
    return (
        <section>
            <h3>Event status</h3>
            <p className="status">
                Your flight details have been saved and can now be found on your calendar.
            </p>
        </section>
    )
}

export default SaveFlight;