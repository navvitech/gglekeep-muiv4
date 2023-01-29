import { Notifications } from "@material-ui/icons";

const Reminder = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Notifications
        style={{ height: "50vh", width: "50vh", opacity: "0.1" }}
      />
      <h3>Notes with upcoming reminders appear here</h3>
    </div>
  );
};

export default Reminder;
