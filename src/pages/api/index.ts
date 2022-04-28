// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// import { data } from '../../../data/data';
import data from '../../../data/data.json';
import { IDataType } from '../../types';

type Data = IDataType[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IDataType[]>
) {
  // res.status(200).json(data);
  res.status(200).send(data)
}
