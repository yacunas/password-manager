import React from "react";
import { Table, Container, Button } from "react-bootstrap";
import { users } from "../models/users";

const SharedAccess = ({ userAccess }) => {
  return (
    <Container className="mt-2 ">
      <Table hover>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user.user} className="align-middle">
                  <td>{user.user}</td>
                  <td>
                    <Button size="sm" variant="light">
                      Revoke Access
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default SharedAccess;
