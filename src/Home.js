import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'john', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'paul', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'ringo', id: 3},
  ]);

  const [name, setName] = useState('george');

  const handleDelete = (id) => {
    const newBlog = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlog);
  }

  useEffect(() => {
    console.log('use effect ran');
    // console.log(blogs);
    console.log(name)
  }, [name]);

  return (
    <div className="home">
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "john")} title="John's blogs"/> */}
      <BlogList blogs={blogs} title="New Blogs" handleDelete={handleDelete}/>
      {/* <button onClick={() => setName('john')}>Change name</button>
      <p>{ name }</p> */}
    </div>
  );
}

export default Home;