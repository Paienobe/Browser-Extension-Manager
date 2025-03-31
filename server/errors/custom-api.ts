export class CustomAPIError extends Error {
  statusCode?: number;
  code?: number;
  keyValue?: Record<string, any>;
  errors?: Record<string, { message: string }>;
  value?: string;

  constructor(message: string) {
    super(message);
  }
}
