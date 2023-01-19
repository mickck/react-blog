import { configureStore, createSlice } from "@reduxjs/toolkit";
import moment from "moment/moment";

const nowTime = moment().format("DD/MMM/YYYY HH:mm");

let blogData = createSlice({
  name: "blogData",
  initialState: [
    { id: 1, title: "First blog", mainText: "this is first text. this blog to show you what I can.", created: "19/Jan/2023 15:36", updated: "19/Jan/2023", like: 2, img: 0 },
    {
      id: 2,
      title: "Second blog",
      mainText:
        "With this approach supported, the developer only needs to add the 'loading' attribute to the image to be embedded to implement lazily loading.It' s not even necessary for developers to implement this. With a certain amount of HTML foundation, you can add enough loading properties and let more people manage them.Let&colon;s look at the code for that method.",
      created: "19/Jan/2023 15:40",
      updated: "19/Jan/2023",
      like: 0,
      img: 1,
    },
  ],
  reducers: {
    getBlogData: (state = this.initialState, action) => {
      let newData = {
        id: state.length + 1,
        title: action.payload.title,
        mainText: action.payload.mainText,
        created: nowTime,
        updated: nowTime,
        like: 0,
        img: "",
      };
      state.push(newData);
      console.log(state);
    },
    modifyBlogData: (state = this.initialState, action) => {
      let modifiedData = {
        id: state[action.payload.index].id,
        title: action.payload.title,
        mainText: action.payload.mainText,
        created: state[action.payload.index].created,
        updated: nowTime,
        like: 0,
        img: state[action.payload.index].img,
      };
      state.splice(action.payload.index, 1, modifiedData);
    },
  },
});

export default configureStore({
  reducer: {
    blogData: blogData.reducer,
  },
});

export let { getBlogData, modifyBlogData } = blogData.actions;
