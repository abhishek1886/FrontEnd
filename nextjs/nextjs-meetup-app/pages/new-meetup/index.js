import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const addMeetupHandler = (meetupData) => {
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUpPage;
