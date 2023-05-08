import ContactsInfo from "../../components/contactsInfo/ContactsInfo";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";

const Contacts = () => {
  return (
    <>
      <Header />
      <div className="contacts">
        <SideBar />
        <div className="contactsRightSide">
          <ContactsInfo />
        </div>
      </div>
    </>
  );
};

export default Contacts;
