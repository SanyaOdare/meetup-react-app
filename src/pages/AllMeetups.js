// import MeetupItem from "../components/meetups/MeetupItem";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'Indoor FrontDev Meetup',
    image:
      'https://images.pexels.com/photos/159805/meeting-modern-room-conference-159805.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    address: 'FrontDev Hub 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'Global FrontDev Meetup',
    image:
      'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    address: 'FrontDev Hub 5, 12345 Meetup City',
    description:
      'This is a meetup for all amazing Frontend Developer. It promises to be fun. See you there!',
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>    
  );
}

export default AllMeetupsPage;