import Layout from "./Layout";
import HomeLayout from "./HomeLayout";

import { CustumnContext } from "./Context";
import { useContext } from "react";

const User = () => {
  const { members } = useContext(CustumnContext);
  return (
    <Layout>
      <HomeLayout>Generation Thailand Home - User Sector</HomeLayout>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.lastname}</td>
              <td>{member.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default User;
