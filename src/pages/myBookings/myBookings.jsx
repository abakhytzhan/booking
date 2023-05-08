import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import MyBookingsInfo from "../../components/myBookingsInfo/MyBookingsInfo";

const MyBookings = () => {
  return (
    <>
      <Header />
      <div className="contacts">
        <SideBar />
        <div className="contactsRightSide">
          <MyBookingsInfo />
        </div>
      </div>
    </>
  );
};

export default MyBookings;
