
import MeetupList from "@/components/meetups/MeetupList";

const HomePage = (props) => {
  console.log(props.meetups);

  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // fetch data from an API
  const response = await fetch("http://localhost:3000/api/meetup-data");

  const res = await response.json();
  const data = res.data;

  return {
    props: {
      meetups: data.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      })),
    },
  };
}

export default HomePage;
