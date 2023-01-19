import { configureStore, createSlice } from "@reduxjs/toolkit";

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
});

export default configureStore({
  reducer: {
    blogData: blogData.reducer,
  },
});
