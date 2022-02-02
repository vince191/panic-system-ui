import React from "react";


import Table from '../components/Table';
import Header from '../components/Header';
import usePanic from '../hooks/usePanic';

const Dashboard: React.FC = () => {
 
  const { isLoading, data, isError } = usePanic();



  return (
    <div className="App">
      <Header />
      <div className="page-content">
        {isLoading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {!isLoading && data && <Table items={data} />}
        {isError && (
          <div className="alert alert-danger" role="alert">
            Error fetching panic requests
          </div>
        )}
      </div>
    
    </div>
  );
};

export default Dashboard;