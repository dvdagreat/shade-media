import { useState } from "react"
import { API_URL } from "../../../constants";
import { CREATE_POSTS_PATH } from "../constants";
import { Navigate, redirect } from "react-router";

export default function PostCreate() {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  
  let showList = false;
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = `${API_URL}/${CREATE_POSTS_PATH}`;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        alert('Post saved successfully!');
        setFormData({
          title: '',
          description: ''
        }); // Clear form
        
        showList = true;
      } else {
        alert('Failed to save data.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred.');
    }
  }
  
  if(showList) {
    redirect('/list')
  }
  
  return (
    showList ? <Navigate to='/list' /> : <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="desc">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
