import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddressTable from '../components/tables/AddressTable';
import CompanyTable from '../components/tables/CompanyTable';
import EmailTable from '../components/tables/EmailTable';

const CompleteTable = () => {
  const [email, setEmail] = useState();
  const [companyName, setCompanyName] = useState();
  const [address, setAddress] = useState();
  const getEmailData = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      const emailSort = emailSortDesc([...data]);
      setEmail(emailSort);
      const companySort = companySortAsc([...data]);
      setCompanyName(companySort);
      const evenIdSort = evenFilterMap([...data]);
      setAddress(evenIdSort);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEmailData();
  }, []);
  console.log(email, 'EMAIL');
  console.log(companyName, 'NAME');
  console.log(address, 'ADDRESS');
  return (
    <div className="complete-table__container">
      <EmailTable email={email} />
      <CompanyTable companyName={companyName} />
      <AddressTable address={address} />
    </div>
  );
};

export default CompleteTable;

const emailSortDesc = (users) => {
  const result = users.sort((a, b) => {
    const emailA = a.email.toLowerCase();
    const emailB = b.email.toLowerCase();
    if (emailA < emailB) {
      return 1;
    }
    if (emailA > emailB) {
      return -1;
    }
    return 0;
  });
  return result;
};

const companySortAsc = (users) => {
  const result = users.sort((a, b) => {
    const companyA = a.company.name.toLowerCase();
    const companyB = b.company.name.toLowerCase();
    if (companyA < companyB) {
      return -1;
    }
    if (companyA > companyB) {
      return 1;
    }
    return 0;
  });
  return result;
};

const evenFilterMap = (users) => {
  const result = users
    .filter((user) => user.id % 2 === 0)
    .map((user) => {
      return { id: user.id, companyName: user.company.name, ...user.address };
    });
  return result;
};
