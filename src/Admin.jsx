import { useState, useContext } from "react";
import { CustumnContext } from "./Context";

import Layout from "./Layout";
import HomeLayout from "./HomeLayout";

const Admin = () => {
  const { members, createData, deleteData } = useContext(CustumnContext);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const handleCreateData = async (event) => {
    event.preventDefault();
    if (
      name.trim() === "" ||
      lastname.trim() === "" ||
      position.trim() === ""
    ) {
      alert("Please input data");
      return;
    } else {
      await createData(name, lastname, position);
      setName("");
      setLastname("");
      setPosition("");
    }
  };

  const handleDelete = async (id) => {
    await deleteData(id);
  };
  return (
    <Layout>
      <HomeLayout>Generation Thailand React - Assessment</HomeLayout>
      <div className="admin-form">
        <h4>Create User Here</h4>
        {/* Form for Creating New Member */}
        <form className="form">
          <input
            className="form-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Lastname"
            value={lastname}
            onChange={(ev) => setLastname(ev.target.value)}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Position"
            value={position}
            onChange={(ev) => setPosition(ev.target.value)}
          />
          {/* Button: handleCreateData / createData */}
          <button className="form-button" onClick={handleCreateData}>
            Save
          </button>
        </form>
      </div>
      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Positon</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* map table out */}
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.lastname}</td>
              <td>{member.position}</td>
              <td>
                {/* Button: handleDelete / deleteData */}
                <button
                  className="del-btn"
                  onClick={() => handleDelete(member.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Admin;
