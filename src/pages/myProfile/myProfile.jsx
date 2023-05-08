import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import MyProfileInfo from "../../components/myProfileInfo/MyProfileInfo";

const MyProfile = () => {
  return (
    <>
      <Header />
      <div className="contacts">
        <SideBar />
        <div className="contactsRightSide">
          <MyProfileInfo />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
