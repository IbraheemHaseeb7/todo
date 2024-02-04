"use client";

import { Todo } from "@/types/Todo";
import axios from "axios";
import React, { useState } from "react";

export default function Add() {
  const [inputs, setInputs] = useState<Todo>({
    title: "",
    description: "",
  });
  const [file, setFile] = useState();

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const body: FormData = new FormData();
    body.append("title", inputs.title);
    body.append("description", inputs.description);

    // @ts-ignore
    body.append("file", file);

    try {
      let response: any = await axios.post("/api/add", body);

      setInputs({
        title: "",
        description: "",
      });
      setFile(undefined);
    } catch (e: any) {
      console.log(e.message);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
  ) {
    if (e.target.name === "file") {
      setFile(e.target.files[0]);
      setInputs({ ...inputs, file: e.target.files[0] });
    }
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  return (
    <form className="w-full flex justify-center items-center flex-col h-screen bg-gray-800">
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
      <input
        type="file"
        className="file-input mt-2 w-full max-w-xs"
        name="file"
        onChange={handleChange}
        value={inputs.file}
      />
      <button onClick={handleSubmit} className="btn mt-2">
        Submit
      </button>
    </form>
  );
}
