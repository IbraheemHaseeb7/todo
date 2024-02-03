import { ApiResponse } from "./Types/ApiResponse";

export async function postRequest(
  link: string,
  body: Object,
  headers?: any
): Promise<ApiResponse> {
  try {
    let response: any = await fetch(link, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });
    return { code: 200, message: "Successful request", data: response.json() };
  } catch (e: any) {
    return { code: 500, message: e.message };
  }
}
