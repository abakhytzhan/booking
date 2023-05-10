import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import MyProfileInfo from "../../components/myProfileInfo/MyProfileInfo";
import { useEffect, useState } from "react";
import { getUserProfile } from "../../service/getUserProfile";

const MyProfile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserProfile(JSON.parse(localStorage.getItem("currentUserID")))
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header />
      <div className="contacts">
        <SideBar />
        <div className="contactsRightSide">
          {user ? <MyProfileInfo user={user} /> : null}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
