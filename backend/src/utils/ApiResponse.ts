export class ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T | null;

  constructor(
    statusCode: number,
    data: T | null,
    message = "Success"
  ) {
    this.success = true;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}