import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter/counterSlice"
const store= configureStore(
    {
        reducer:{
            counter: counter,
         },
    }
);

export default store;