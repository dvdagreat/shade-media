// import { Link } from "react-router"
// import { useAppSelector } from "../../../redux/hooks"
import { useEffect, useState } from "react"
import { API_URL } from "../../../constants"
import { LIST_POSTS_PATH } from "../constants"
import { Link } from "react-router";

type IPostData = {
  id: number;
  title: string;
}

export default function PostList() {  
  const [data, setData] = useState<IPostData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const endpoint = `${API_URL}/${LIST_POSTS_PATH}`;
    
    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error.message as any}</p>;
  }
  
  return (
    <div>
      {
        data && data.map((post) => (
          <Link key={post.id} to={{
            pathname: `/detail/${post.id}`
          }}>{post.title}</Link>
        ))
      }
    </div>
    )
}
