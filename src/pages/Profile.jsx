import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
   <div className="page-center">
  <div className="card profile-card">
    <h2 className="profile-title">Profile</h2>

    <div className="profile-info">
      <p>
        <span>Name</span>
        <strong>Pankaja</strong>
      </p>

      <p>
        <span>Email</span>
        <strong>pankajapoojari@gmail.com</strong>
      </p>
    </div>
  </div>
</div>

  );
};

export default Profile;
