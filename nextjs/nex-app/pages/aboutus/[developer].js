import { useRouter } from "next/router";

const details = [
  { id : 1, name: 'Yash', role: 'Senior Developer'},
  { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
  { id : 3, name: 'Suresh', role: 'Frontend Developer'}
]

const DeveloperPage = () => {
  const router = useRouter();
  const id = Number(router.query.developer);

  const data = details.find(data => data.id === id);
  return(
    <div>
      {data && <p>{`Developer's name: ${data.name}`}</p>}
      {data && <p>{`Developer's role: ${data.role}`}</p>}
      {!data && <p>Developer doesn't exist.</p>}
    </div> );
};

export default DeveloperPage;