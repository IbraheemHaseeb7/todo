import { Todo } from "@/types/Todo";
import React from "react";

export default function Table({ data }: { data: Todo[] }) {
  const heads: string[] = [
    "Title",
    "Description",
    "File Name",
    "Edit",
    "Delete",
  ];

  return (
    <div className="overflow-x-auto bg-gray-800 h-screen">
      <table className="w-full border-separate border-spacing-4">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            {heads.map((res) => {
              return (
                <th className="text-left" key={res}>
                  {res}
                </th>
              );
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((values) => {
            return (
              <tr key={values.title} className="">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td className="py-5">{values.title}</td>
                <td>{values.description}</td>
                <td>
                  {values.file ? (
                    <div>
                      <a href={`${values.file}`} target="_blank">
                        View File
                      </a>
                    </div>
                  ) : (
                    "No file found"
                  )}
                </td>
                <td>
                  <button className="btn btn-circle">edit</button>
                </td>
                <td>
                  <button className="btn btn-circle">del</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
