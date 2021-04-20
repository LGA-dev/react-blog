// import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  // data: blogs ("Grab the data, but call it blogs in this context")
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

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
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="New Blogs" /> }
    </div>
  );
}

export default Home;