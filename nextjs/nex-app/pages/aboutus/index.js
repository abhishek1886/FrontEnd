import { Fragment } from "react";
import Link from "next/link";

const details = [
  { id : 1, name: 'Yash', role: 'Senior Developer'},
  { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
  { id : 3, name: 'Suresh', role: 'Frontend Developer'}
]
const NewsPage = () => {
  const userData = details.map(data => (
    <li key={data.id}><Link href={`/aboutus/${data.id}`}>{data.name}</Link></li>
  ))
  return (
    <Fragment>
      <h1>About Us page.</h1>
      <ul>
        {userData}
      </ul>
    </Fragment>
  );
};

export default NewsPage;
