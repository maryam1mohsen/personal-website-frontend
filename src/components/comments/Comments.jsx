import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import * as commentService from "../../services/commentService";
import authService from "../../services/authService";
import 'bootstrap/dist/css/bootstrap.min.css';

const Comments = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedComment, setSelectedComment] = useState(null);

  useEffect(() => {
    async function getComments() {
      const commentsData = await commentService.getByBlogId(blogId);
      setComments(commentsData);
    }
    getComments();
  }, [blogId]);

  useEffect(() => {
    const user = authService.getUser();
    setCurrentUser(user);
  }, []);

  const handleAddComment = async (formData) => {
    if (blogId) {
      try {
        await commentService.create(blogId, formData);
        const updatedComments = await commentService.getByBlogId(blogId);
        setComments(updatedComments);
        setShowCommentForm(false);
        setSelectedComment(null);
      } catch (error) {
        console.error("Error creating comment:", error);
      }
    } else {
      console.error("Blog ID is missing.");
    }
  };

  const handleEditComment = (comment) => {
    setSelectedComment(comment);
    setShowCommentForm(true);
  };

  const handleUpdateComment = async (commentId, formData) => {
    try {
      const updatedComment = await commentService.update(commentId, formData);
      const updatedComments = comments.map((comment) =>
        comment._id !== updatedComment._id ? comment : updatedComment
      );
      setComments(updatedComments);
      setShowCommentForm(false);
      setSelectedComment(null);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await commentService.remove(commentId);
      const updatedComments = comments.filter((comment) => comment._id !== commentId);
      setComments(updatedComments);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const commentFormVisible = () => {
    setShowCommentForm(!showCommentForm);
    if (!showCommentForm) {
      setSelectedComment(null);
    }
  };

  return (
    <section className="container mt-4">
      <h2 className="mb-3">Comments</h2>
      <button className="btn btn-primary mb-3" onClick={commentFormVisible}>
        {showCommentForm ? "Close Comment Form" : "Add Comment"}
      </button>

      {showCommentForm && (
        <div className="mb-4">
          <CommentForm
            handleAddComment={handleAddComment}
            selectedComment={selectedComment}
            handleUpdateComment={handleUpdateComment}
          />
        </div>
      )}

      {!comments.length && <p className="text-muted">There are no comments yet.</p>}

      {comments.map((comment) => (
        <article key={comment._id} className="border rounded p-3 mb-3">
          <p>{comment.paragraph}</p>
          {currentUser && (
            <>
              <button
                className="btn btn-secondary btn-sm me-2"
                onClick={() => handleEditComment(comment)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteComment(comment._id)}
              >
                Delete
              </button>
            </>
          )}
        </article>
      ))}
    </section>
  );
};

export default Comments;
