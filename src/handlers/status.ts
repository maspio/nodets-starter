import  { Request, Response } from "express";
import { Status } from "../types/status";

export function status(
	request: Request<{}, {}>,
	response: Response<Status>
) {
	return response.status(201).send({
		status: 'ok'
	});
}