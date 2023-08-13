import { useRouter } from "next/router";
import MeetupDetails from "@/components/meetups/MeetupDetails";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Delhi Meetup at Qutub Minar",
    image:
      "https://media.istockphoto.com/id/165204592/photo/qutub-minar-delhi-india.jpg?s=612x612&w=0&k=20&c=YvFLPmQmlgCyX7RGZA1VpKctdC6QsChINzLSMDPNI9k=",
    address: "Seth Sarai, Mehrauli, New Delhi, Delhi 110030",
    description: "We will be meeting at Historical Monment Qutub Minar.",
  },
  {
    id: "m2",
    title: "Delhi Meetup at Red Fort",
    image:
      "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    address:
      "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi, 110006",
    description: "We will be meeting at Historical Monment Red Fort.",
  },
  {
    id: "m3",
    title: "Delhi Meetup at India Gate",
    image:
      "https://mediaim.expedia.com/destination/1/2d75301e5fa5840846672492693f1fb3.jpg",
    address: "Kartavya Path, India Gate, New Delhi, Delhi 110001",
    description: "We will be meeting at Historical Monment India Gate.",
  },
];

const Details = (props) => {
  const { meetupDetails } = props;
  return (
    <>
      {meetupDetails ? (
        <MeetupDetails data={meetupDetails} />
      ) : (
        <p>Something went wrong.</p>
      )}
    </>
  );
};

export async function getStaticPaths() {
  const paths = DUMMY_MEETUPS.map((meetup) => ({ params: { meetupId: meetup.id }}));

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const data = DUMMY_MEETUPS.find((data) => data.id === meetupId);
  return {
    props: {
      meetupDetails: data ? data : null,
    },
  };
}

export default Details;
