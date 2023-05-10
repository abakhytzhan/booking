const RoomDescription = ({ room }) => {
  return (
    <section className="roomDescription">
      <table>
        <tbody>
          <tr>
            <td className="firstColumn">Floor:</td>
            <td>{room.floor}</td>
          </tr>
          <tr>
            <td className="firstColumn">Area:</td>
            <td>{room.area}</td>
          </tr>
          <tr>
            <td className="firstColumn">Capacity:</td>
            <td>{room.capacity}</td>
          </tr>
          <tr>
            <td className="firstColumn">Facilities:</td>
            <td>
              {room.facilities.map((elem) => (
                <span key={elem.name}>{elem.name} </span>
              ))}
            </td>
          </tr>
          <tr>
            <td className="firstColumn">Description:</td>
            <td>{room.description}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default RoomDescription;
