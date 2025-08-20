import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

export const fetchStudent = createAsyncThunk(
  "students/fetchStudent",
  async () => {
    try {
      const list = await fetch(`http://localhost:9000/students`);
      // const list = await fetch(`http://localhost:9900/home`);
      const data = await list?.json();
      return data;
    }
    catch (e) {
      return e.message;
    }
  }
);

export const signUp = createAsyncThunk(
  "students/signUp",
  async (newData) => {
    // const list = await fetch('http://localhost:9000/students/add', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newData)
    // })
    // const data = await list?.json();
    // alert('Student added')
    // return data

    try {
      const query = JSON.stringify(newData);

      const list = await fetch(`http://localhost:9000/students/add?data=${query}`);
      const data = await list?.json();
      return data;
    }
    catch (e) {
      return e.message;
    }
  }
);

export const signin = createAsyncThunk("students/signin", async (data) => {
  try {
    const query = JSON.stringify(data);

    const response = await fetch(`http://localhost:9000/students/signIn?data=${query}`);
    const getting = await response?.json();
    return getting;
  }
  catch (e) {
    return e.message;
  }
});

export const deleteUser = createAsyncThunk('students/deleteUser', async (data) => {
  try {
    const query = JSON.stringify(data);

    const response = await fetch(`http://localhost:9000/students/delete?data=${query}`);
    const result = await response?.json();
    return result;
  }
  catch (e) {
    return e.message;
  }
})

export const editPassword = createAsyncThunk("students/editPassword", async (data) => {
  try {
    const query = JSON.stringify(data);

    const response = await fetch(`http://localhost:9000/students/editPassword?data=${query}`);
    const result = await response?.json();
    return result;
  } catch (e) {
    return e.message;
  }
}
);
