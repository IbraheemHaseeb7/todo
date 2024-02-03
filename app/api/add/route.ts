import { ApiResponse } from "@/Types/ApiResponse";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const isBody = JSON.stringify(body).length === 0;

    if (isBody) {
      // HANDLING ERROR FOR NO BODY PROVIDED
      const response: ApiResponse = {
        code: 400,
        message: "Body not provided",
      };

      return Response.json(response);
    }

    console.log(body);

    // SENDING 200 RESPONSE
    const response: ApiResponse = {
      code: 200,
      message: "New Item Added in Todo",
    };
    return Response.json(response);
  } catch (e: any) {
    // SENDING 500 RESPONSE
    const response: ApiResponse = {
      code: 500,
      message: e.message,
    };
    return Response.json(response);
  }
}
