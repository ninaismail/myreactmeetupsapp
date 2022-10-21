import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://reactmeetupsapp-4cbe4-default-rtdb.firebaseio.com/meetups.json',
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //firebase returns an object that we have to push into an array here to be able to display it
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }
      //when the promise is garenteed load data
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  //this is the content of our page that has nothing to do with a promise
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;