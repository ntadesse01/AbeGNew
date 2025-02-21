import {z} from "zod"

export const exceptionHandler = (method) => {
  return async (req, res, next) => {
    try {
      return await method(req, res, next); // Return the result properly
    } catch (error) {
      let errorObject;
      if (error instanceof z.ZodError) {
        errorObject = error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        }));
      } else {
        errorObject = error;
      }

      return res.status(500).json({
        success: false,
        message: "Server error",
        error: errorObject,
      });
    }
  };
};
 