"use client";

import { Todo } from "@/Types/Todo";
import { postRequest } from "@/util";
import React, { useState } from "react";

export default function Add() {
  const [inputs, setInputs] = useState<Todo>({ title: "", description: "" });

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    try {
      let response: any = await postRequest(
        "/api/add",
        {
          title: inputs.title,
          description: inputs.description,
        },
        { "Content-Type": "application/json" }
      );
      response = await response.data;

      console.log(response);
    } catch (e: any) {
      console.log(e.message);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  return (
    <form className="absolute top-0 right-0 w-[85%] flex justify-center items-center flex-col h-screen">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Give todo a title</span>
        </div>
        <input
          type="text"
          placeholder="Title..."
          className="input input-bordered w-full max-w-xs"
          name="title"
          value={inputs.title}
          onChange={handleChange}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Description</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24 resize-none"
          placeholder="Description..."
          name="description"
          value={inputs.description}
          onChange={handleChange}
        ></textarea>
      </label>
      <button onClick={handleSubmit} className="btn m-5">
        Submit
      </button>
    </form>
  );
}
