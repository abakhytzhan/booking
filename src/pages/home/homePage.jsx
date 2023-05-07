import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import Rooms from "../../components/rooms/Rooms";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="rooms">
        <SideBar />
        <Rooms />
      </div>
    </>
  );
};

export default HomePage;
