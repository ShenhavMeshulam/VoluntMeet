const DEFAULT_STATUS = 500;
const DEFAULT_MESSAGE = 'Internal error!';

const getValidationErrorBody = ({errors}) =>
  Object.entries(errors).map(([field, {properties: {message}}]) => ({field, message}));

const errorMap = {
  ValidationError: (error) => ({status: 400, body: getValidationErrorBody(error)})
}

export const ErrorHandlerMiddleware = (error, req, res, next) => {
  const errorDetails = errorMap[error.name]?.(error);

  if (!errorDetails) {
    console.error(error);
  }

  res.status(errorDetails?.status ?? DEFAULT_STATUS).send(errorDetails?.body ?? DEFAULT_MESSAGE);
}