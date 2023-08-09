import cookieParser from "cookie-parser";
import { json } from "express";
import morgan from "morgan";

const middlewares = [morgan("dev"), json(), cookieParser()];

export default middlewares;
