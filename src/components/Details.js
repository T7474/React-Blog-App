import { useParams } from "react-router-dom";
import { useEffect } from "react";
import blogs from "../data/blogs";
import { useState } from "react";
import './Details.css';
export default function Details() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [ author, setAuthor] = useState("");
  // eslint-disable-next-line
  useEffect(() => {
    //ดึงข้อมูลบทความ
    const result = blogs.find((item) => item.id === parseInt(id));
    setTitle(result.title);
    setImage(result.image_url);
    setContent(result.content);
    setAuthor(result.author);   
  }, []);
  return (
    <div className="container">
      <h2 className="title">บทความ : {title}</h2>
      <img src={image} alt={title}/>
      <div className="blog-detail">
        <strong>ผู้เขียน : {author}</strong>
        <p>{content}</p>
      </div>
    </div>
  );
}
