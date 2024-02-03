// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {connectDb, disConnectDb} from "../../utils/db";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


