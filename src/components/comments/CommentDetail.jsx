import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPath';
import { setComment, setError, setLoading } from '../../redux/comments/commentSlice';
import { useMemo } from 'react';
import { result } from 'lodash';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { socket } from '../../utils/socket/socket';

const CommentDetail = () => {

  const {id} = useParams();  // taskId;
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.users);
  const {loading, error, comments} = useSelector(state => state.comments);

  useEffect(() => {
    const getComments = async () => {
      dispatch(setLoading());
      try {
        socket.emit("CLIENT_GET_ALL_COMMENT", "Hello");

        const response = await axiosInstance.get(API_PATHS.COMMENT.GET_ALL(id));
        // console.log(response.data);
        dispatch(setComment(response.data.comments));

        socket.emit("USER_VIEW_TASK", {userId: currentUser._id, taskId: id});
      } catch (error) {
        dispatch(setError(error.response?.data?.message || "Error"));
        console.log(error);
      }
    }

    getComments();

  }, [id]);


  const commentsByParentId = useMemo(() => {
    const group = {};
    comments.forEach(comment => {
      if(!group[comment.parentId]) group[comment.parentId] = [];
      group[comment.parentId].push(comment);
    });
    return group;
  }, [comments]);


  if (loading) return <h1>Loading ...</h1>
  if (error) return <h1 className="error-msg">{error}</h1>

  return (
    <div>
      <div className='my-5'>
        <CommentForm parentId={undefined} type="create" initialValue=""/>
      </div>
      <CommentList commentsByParentId={commentsByParentId}/>
    </div>
  )
}

export default CommentDetail