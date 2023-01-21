import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

const Pascal = () => {
  const [pascalData, setPascalData] = useState();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const data = generate(7);
    setPascalData(data);
  }, []);
  return (
    <div className="pascal-container">
      <div className="pascal-header">This is a Pascal Triangle!</div>
      <div className="pascal__input">
        <p>{`Number of Rows : 7`}</p>
      </div>
      <div className="pascal-button">
        {isShow ? (
          <Button variant="contained" onClick={() => setIsShow(false)}>
            Hide the triangle!
          </Button>
        ) : (
          <Button variant="contained" onClick={() => setIsShow(true)}>
            Show the triangle!
          </Button>
        )}
      </div>
      <div>
        {isShow && (
          <div className="pascal-content">
            {pascalData &&
              pascalData.map((value) => {
                return (
                  <div className="pascal-row">
                    {value.map((number) => {
                      return <div className="pascal-value">{number}</div>;
                    })}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pascal;

const generate = (numRows) => {
  if (numRows === 0) {
    return [];
  }
  if (numRows === 1) {
    return [[1]];
  }
  let result = [[1], [1, 1]];
  for (let i = 3; i <= numRows; i++) {
    let arr = [];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        arr.push(1);
      } else {
        arr.push(result[i - 2][j - 1] + result[i - 2][j]);
      }
    }
    result.push(arr);
  }
  return result;
};
