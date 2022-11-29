import { Navbar } from "../components/navbar";

export const Library = () => {
  return (
    <>
      <Navbar />
      <div className="bg-dark text-light" style={{ height: "100vh" }}>
        <div className="d-flex justify-content-center fw-semibold fs-1 p-5">
          The Library
        </div>
        <div></div>
      </div>
    </>
  );
};
