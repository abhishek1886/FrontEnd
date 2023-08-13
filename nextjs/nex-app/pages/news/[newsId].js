import { useRouter } from "next/router";


const NewsSnapshotPage = () => {
  const router = useRouter();

  const newId = router.query.newsId;
  return <h1>This is a news snapshot</h1>;
};

export default NewsSnapshotPage;