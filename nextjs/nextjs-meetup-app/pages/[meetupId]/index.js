import MeetupDetails from "@/components/meetups/MeetupDetails";

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
  const res = await fetch('http://localhost:3000/api/meetup-data');
  const jsonRes = await res.json();
  const meetupData = jsonRes.data;
  const paths = meetupData.map((meetup) => ({ params: { meetupId: meetup._id.toString() }}));

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  
  const res = await fetch('http://localhost:3000/api/meetup-data');
  const jsonRes = await res.json();
  const meetupData = jsonRes.data;

  const data = meetupData.find((data) => data._id.toString() === meetupId);
  return {
    props: {
      meetupDetails: data ? data : null,
    },
  };
}

export default Details;
