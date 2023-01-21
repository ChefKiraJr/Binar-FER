import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const TwoSum = () => {
  const [sumData, setSumData] = useState();
  const stringifyData = JSON.stringify(sumData);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const data = twoSum([2, 7, 11, 15], 9);
    setSumData(data);
  }, []);
  return (
    <div className="two-sum__container">
      <div className="two-sum__header">This is TwoSum Function Index!</div>
      <div className="two-sum__input">
        <p>{`Array : [2, 7, 11, 15]`}</p>
        <p>{`Target : 9`}</p>
      </div>
      <div className="two-sum__button">
        {isShow ? (
          <Button variant="contained" onClick={() => setIsShow(false)}>
            Hide the result!
          </Button>
        ) : (
          <Button variant="contained" onClick={() => setIsShow(true)}>
            Show the result!
          </Button>
        )}
      </div>
      {isShow && <div className="two-sum__content">{stringifyData}</div>}
    </div>
  );
};

export default TwoSum;

const twoSum = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map[diff] !== undefined) {
      return [map[diff], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
};
