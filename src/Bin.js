import { DeleteOutlined } from "@material-ui/icons";

const Bin = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <DeleteOutlined
        style={{ height: "50vh", width: "50vh", opacity: "0.1" }}
      />
      <h3>No Notes in your Bin</h3>
    </div>
  );
};

export default Bin;
