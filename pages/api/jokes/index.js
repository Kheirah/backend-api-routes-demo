import { jokes } from "../../../lib/data";

export default function handler(_, response) {
  response.status(200).json(jokes);
}