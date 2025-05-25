import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { API_URL } from "../../../constants";
import { GET_POST_BY_ID_PATH } from "../constants";

type IPageParameters = {
  id: string;
}

type IPostData = {
  id: number;
  title: string;
}

export default function PostDetail() {
  const params = useParams<IPageParameters>();
  const id = params.id;
  
    const [data, setData] = useState<IPostData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    
    if (id) {
      useEffect(() => {
        const endpoint = `${API_URL}/${GET_POST_BY_ID_PATH.replace(':id', id)}`;
        
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
    }
    
    if (loading) {
      return <p>Loading data...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message as any}</p>;
    }
  
  return (
    <>
      <div>
        {JSON.stringify(data)}
      </div> 
    </>
  )
}
