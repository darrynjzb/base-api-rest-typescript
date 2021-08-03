export class DomainError extends Error {
  public code: string;
  public status: number = 500;
  public name: string;

  constructor(code: string, msg: string) {
    super(msg);
    this.code = code;
    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}
export class BadRequestError extends DomainError {
  constructor(code: string, msg: string) {
    super(code, msg);
    this.status = 400;
  }
}

export class UnauthorizedError extends DomainError {
  constructor(code: string, msg: string) {
    super(code, msg);
    this.status = 401;
  }
}

export class ForbiddenError extends DomainError {
  constructor(code: string, msg: string) {
    super(code, msg);
    this.status = 403;
  }
}

export class NotFoundError extends DomainError {
  constructor(code: string, msg: string) {
    super(code, msg);
    this.status = 404;
  }
}

export class TimeoutError extends DomainError {
  constructor(code: string, msg: string) {
    super(code, msg);
    this.status = 408;
  }
}
export class ConnectionError extends DomainError {
  constructor(code: string, msg: string) {
    super(code, msg);
    this.status = 500;
  }
}

export class AppError extends DomainError {
  constructor(code: string, msg: string) {
    super(code, msg);
    this.status = 500;
  }
}
