import { Card } from "../components/card";
import { Navbar } from "../components/navbar";
import { Serach } from "../utils/serach";

export const Library = () => {
  const elements = ["one", "two", "three", "four"];
  return (
    <>
      <Navbar />
      <div className="bg-dark text-light" style={{ height: "100vh" }}>
        <div className="d-flex  justify-content-center fw-semibold fs-1 p-5">
          The Library
        </div>
        <div className="m-3 mx-4 text-dark" style={{ width: "300px" }}>
          <Serach height={90} font={10} fontColor="black" />
        </div>
        <section className="container text-center m-4">
          <div className="row">
            {elements.map(() => {
              return (
                <div className="col-4">
                  <Card />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
