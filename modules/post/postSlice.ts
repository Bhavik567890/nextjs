import { createSlice } from "@reduxjs/toolkit";
import { toggleLoading } from "../auth/authSlice";
import axios from "axios";
import { Dispatch } from "redux";
const initialState = {
  postData: [],
  getSinglePostData:{}
};

// get all post data
export const getFetchAllPost = () => async (dispatch: Dispatch) => {
  try {
    dispatch(toggleLoading(true));
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (response.status === 200) {
      dispatch(setPostData(response.data));
    }
  } catch (err) {
    console.log(err);

    //   dispatch(toggleLoading(false))
  } finally {
    dispatch(toggleLoading(false));
  }
};

// create-post
export const createPost = (data:{}) => async (dispatch: Dispatch) => {
    try {
      dispatch(toggleLoading(true));
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",data
      );
        
      
    } catch (err) {
      console.log(err);
  
      //   dispatch(toggleLoading(false))
    } finally {
      dispatch(toggleLoading(false));
    }
  };

//   get-fetch-postbyid
export const fetchSinglePost = (id:number) => async (dispatch: Dispatch) => {
    try {
      dispatch(toggleLoading(true));
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
        if(response.status === 200){

            dispatch(setFetchSinglePost(response.data))
        }
    } catch (err) {
      console.log(err);
  
    } finally {
      dispatch(toggleLoading(false));
    }
  };

//   update -post
export const updatePost = (id:number,values:{}) => async (dispatch: Dispatch) => {
    try {
      dispatch(toggleLoading(true));
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,values
      );
       
    } catch (err) {
      console.log(err);
  
    } finally {
      dispatch(toggleLoading(false));
    }
  };


// delete post
export const deletePost = (id: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(toggleLoading(true));
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
      dispatch(getFetchAllPost());
  } catch (err) {
    console.log(err);

    //   dispatch(toggleLoading(false))
  } finally {
    dispatch(toggleLoading(false));
  }
};


export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostData: (state, action) => {
      state.postData = action.payload;
    },
    setFetchSinglePost:(state,action) =>{
        state.getSinglePostData = action.payload;
    }
  },
});

export const { setPostData,setFetchSinglePost } = postSlice.actions;

export default postSlice.reducer;
