import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios library for API requests

import commentImg1 from "../assets/all-images/ava-1.webp";
//import commentImg2 from "../assets/all-images/ava-4.jpg";
//import commentImg3 from "../assets/all-images/ava-3.jpg";

import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  const [comments, setComments] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);
  const handleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchComments(); // Fetch comments when the component mounts
  }, [blog]);

  // Function to fetch comments for the current blog post
  const fetchComments = () => {
    axios
      .get(`http://localhost:8082/api/v1/feed/getFeedback`)
      .then((response) => {
        // Assuming the response contains the comments sorted by id in descending order (latest first)
        const sortedComments = response.data.sort((a, b) => b.id - a.id);
        setComments(sortedComments);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };

  // Function to handle comment submission
  const handleSubmitComment = (e) => {
    e.preventDefault();

    // Prepare comment data to be sent to the backend
    const commentData = {
      fullName,
      email,
      commentText,
      // Other necessary data related to the blog post (if any)
    };

    // Make a POST request to add the comment to the backend
    axios
      .post("http://localhost:8082/api/v1/feed/addFeedback", commentData)
      .then((response) => {
        // Handle successful comment submission
        console.log("Comment submitted successfully!");
        // Fetch comments again to update the list with the new comment
        fetchComments();
        // Clear the comment form fields after successful submission
        setFullName("");
        setEmail("");
        setCommentText("");
      })
      .catch((error) => {
        console.error("Error submitting comment:", error);
      });
  };

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            
          <Col lg="8" md="8">
              <div className="blog__details">
                {/* ... Your existing JSX code ... */}
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">{comments.length} Review</h4>

                {/* Render the fetched comments dynamically */}
                {comments.slice(0, showAllComments ? comments.length : 4).map((comment) => (
                  <div className="single__comment d-flex gap-3" key={comment.id}>
                    <img src={commentImg1} alt="" />
                    <div className="comment__content">
                      <h6 className="fw-bold">{comment.fullName}</h6>
                      <p className="section__description mb-0">{comment.date}</p>
                      <p className="section__description">{comment.commentText}</p>
                      <span className="replay d-flex align-items-center gap-1">
                        <i className="ri-reply-line"></i> Reply
                      </span>
                    </div>
                  </div>
                ))}
                {/* Show the "Read more" link if there are more than 5 comments */}
                {comments.length > 5 && (
                  <p className="read-more" onClick={handleShowAllComments}>
                    {showAllComments ? "Show less..." : "Read more..."}
                  </p>
                )}

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">
                    You must sign in to make or comment on a post
                  </p>

                  <Form onSubmit={handleSubmitComment}>
                    <FormGroup className="d-flex gap-3">
                      <Input
                        type="text"
                        placeholder="Full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                      ></textarea>
                    </FormGroup>

                    <button type="submit" className="btn comment__btn mt-3">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className="fw-bold">Tips</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;