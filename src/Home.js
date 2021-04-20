import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Can't use async/await inside useEffect [ useEffect(async () => { ]
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      // Return a promise
      .then(response => {
        // Response object
        // console.log(response)
        if(!response.ok) {
          throw Error('could not fetch the data for that resource :(')
        }
        // Returning this will make this return another promise, which will be used in the .then below
        return response.json()
      })
      .then(data => {
        // console.log(data);
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        // console.log(err.message);
        setIsLoading(false);
        setError(err.message);
      })
  }, []);

  return (
    <div className="home">
      {/* Conditional templating */}
      {/* This will check if what is the left first (blogs) is true or false */}
      {/* If it's false, it will never check what is in the right (the component), preveting rendering it */}
      {/* If it's true, it will render the component */}
      {/* In this case it will be like this:
      1. blogs = false
      2. fetch the blogs and set them
      3. blogs = true
      4. render the component */}
      {error && <div>{ error }</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="New Blogs" />}
    </div>
  );
}

export default Home;