import { ArchiveOutlined } from "@material-ui/icons";

const Archive = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <ArchiveOutlined
        style={{ height: "50vh", width: "50vh", opacity: "0.4" }}
      />
      <h3>Your archived notes appear here</h3>
    </div>
  );
};

export default Archive;
