import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'john', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'paul', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'ringo', id: 3},
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="New Blogs"/>
      <BlogList blogs={blogs.filter((blog) => blog.author === "john")} title="John's blogs"/>
    </div>
  );
}

export default Home;