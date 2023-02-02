import React, { useEffect, useState } from 'react';
import EmployeeTable from '../components/EmployeeTable';

const EmployeePage = () => {
  const [listPegawai, setListPegawai] = useState();
  const getEmployeeData = () => {
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          setListPegawai(data);
        });
    } catch (err) {
      console.log('Error :' + err.message);
    }
  };
  useEffect(() => {
    getEmployeeData();
  }, []);
  return (
    <div style={{ width: '100%', padding: '20px 20px' }}>
      <EmployeeTable
        listPegawai={listPegawai}
        headerPertama="Nama"
        headerKedua="Email"
        headerKetiga="No. Handphone"
      />
    </div>
  );
};

export default EmployeePage;
