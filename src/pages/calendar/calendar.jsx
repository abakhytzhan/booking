import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import CalendarInfo from "../../components/calendarInfo/CalendarInfo";

const Calendar = () => {
  return (
    <>
      <Header />
      <div className="contacts">
        <SideBar />
        <div className="contactsRightSide">
          <CalendarInfo />
        </div>
      </div>
    </>
  );
};

export default Calendar;
