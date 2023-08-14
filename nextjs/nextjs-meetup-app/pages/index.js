import Head from "next/head";
import { Fragment } from "react";

import MeetupList from "@/components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>The MeetUp List</title>
        <meta name='description' content="content" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
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
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
