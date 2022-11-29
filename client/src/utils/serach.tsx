import ReactSearchBox from "react-search-box";

export const Serach = (props: any) => {
  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];
  return (
    <ReactSearchBox
      placeholder="Search here for you book"
      data={data}
      inputFontSize={props.font}
      inputHeight={props.height}
      inputFontColor={props.fontColor}
      onSelect={function (record: {
        item: { key: string; value: string };
      }): void {
        throw new Error("Function not implemented.");
      }}
      onChange={function (value: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};
