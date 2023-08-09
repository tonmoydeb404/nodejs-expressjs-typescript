import asyncWrapper from "../helpers/asyncWrapper";

export const getHome = asyncWrapper(async (_req, res) => {
  res.send("Hello world");
});
