import React from 'react'


const BlogDetails = async ({ params }) => {
    const res = await fetch(`http://127.0.0.1:5000/api/bully-sticks/${params.id}`);
    const blog = await res.json();
  return (
    <div>
      <h1>Hallo from Blog Details</h1>
    </div>
  )
}

export default BlogDetails
