import Post from './Post'; // Adjust the path as necessary

function Blog() {
  const posts = [
    { title: "My First Post", body: "This is the content of my first post." },
    { title: "Learning React", body: "React is a powerful library for building UIs." },
    { title: "Understanding Props", body: "Props are how we pass data to components." },
  ];

  return (
    <>
      
      {posts.map((post, index) => (
        <Post key={index} title={post.title} body={post.body} />
      ))}
    </>
  );
}

export default Blog;
