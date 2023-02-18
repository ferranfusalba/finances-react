import DataPie from "../ui/DataPie";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Data = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <p>Data</p>
      <DataPie width={width} height={375} />
    </>
  );
};

export default Data;
