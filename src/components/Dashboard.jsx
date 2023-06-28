import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";

const Dashboard = () => {
  const [error, setError] = useState('')

  const handleLogout = () => {};

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
