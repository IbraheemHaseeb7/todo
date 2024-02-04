import { todo } from "@/storage/Todo";
import { ApiResponse } from "@/types/ApiResponse";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const data: FormData = await req.formData();

    const hasBody =
      data.get("title")?.toString().length !== 0 &&
      data.get("description")?.toString().length !== 0;

    if (!hasBody) {
      // HANDLING ERROR FOR NO BODY PROVIDED
      const response: ApiResponse = {
        message: "Body not provided",
      };

      return Response.json(response, {
        status: 400,
        statusText: "Body not provided",
      });
    }

    const file: File | any = data.get("file");
    const filePath: string = path.join(__dirname, file.name);

    // SENDING 200 RESPONSE
    const response: ApiResponse = {
      message: "New Item Added in Todo",
    };

    todo.push({
      title: data.get("title")?.toString()!,
      description: data.get("description")?.toString()!,

      // @ts-ignore
      file: filePath,
    });

    // @ts-ignore
    await createFile(file, filePath);

    return Response.json(response, {
      status: 200,
      statusText: "New Item added in Todo",
    });
  } catch (e: any) {
    // SENDING 500 RESPONSE
    const response: ApiResponse = {
      message: e.message,
    };
    return Response.json(response, { status: 500, statusText: e.message });
  }
}

export async function GET(req: Request) {
  return Response.json({ data: todo }, { status: 200 });
}

async function createFile(file: File, filePath: string) {
  try {
    file.arrayBuffer().then(async (res) => {
      let buffer: Uint8Array = new Uint8Array(res);

      await fs.writeFile(filePath, buffer);
    });
  } catch (error) {
    console.error("Error creating file:", error);
  }
}
