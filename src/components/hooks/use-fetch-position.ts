import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addPositions } from '../../bus/positions/position-slice';

import  data from '../../../data/data.json'

export const useFetchPosition = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  }, [dispatch]);
};
