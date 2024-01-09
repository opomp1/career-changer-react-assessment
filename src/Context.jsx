import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CustumnContext = createContext({});

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

export function CustumnContextProvider({ children }) {
  const [reload, setReload] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers([...mockEmployees, ...response.data]);
      console.log(response.data);
    };
    getData();
  }, [!reload]);

  //   Create Data
  const createData = async (name, lastname, position) => {
    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      {
        name: name,
        lastname: lastname,
        position: position,
      }
    );
    console.log(response);
    if (response.status === 200 && response.data) {
      alert("Successfully created new member!");
      console.log("-------------------------------------------------------");
      setReload(!reload);
    } else {
      alert("Failed to create");
    }
  };

  const deleteData = async (id) => {
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`
    );
    if (response.status === 200 && response.data) {
      alert("Successfully Deleted a member");
      setMembers((allMember) => allMember.filter((member) => member.id !== id));
    } else {
      alert("Failed to delete");
      setReload(!reload);
    }
  };

  return (
    <CustumnContext.Provider
      value={{ members, setMembers, createData, deleteData }}
    >
      {children}
    </CustumnContext.Provider>
  );
}
