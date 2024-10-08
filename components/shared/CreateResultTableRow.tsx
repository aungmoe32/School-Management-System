import React, { useEffect, useState } from "react";
import { TableRow, TableCell } from "../ui/table";

type Props = {
  num: number;
  setCheckTableRowValid: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
  setValidTableRowCount: React.Dispatch<React.SetStateAction<number>>;
  setResultData: React.Dispatch<React.SetStateAction<any[]>>;
};

const CreateResultTableRow = ({
  num,
  setCheckTableRowValid,
  setValidTableRowCount,
  setResultData,
}: Props) => {
  const [isValid, setIsValid] = useState(false);
  const [data, setData] = useState({
    name: "",
    rollNo: "",
    English: "",
    Math: "",
    Be: "",
    Dld: "",
    Dc: "",
    Web: "",
    "C++": "",
  });

  useEffect(() => {
    if (
      data.name !== "" &&
      data.rollNo !== "" &&
      data.English !== "" &&
      data.Math !== "" &&
      data.Be !== "" &&
      data.Dld !== "" &&
      data.Dc !== "" &&
      data.Web !== "" &&
      data["C++"] !== ""
    ) {
      console.log("set valid row", isValid);
      setIsValid(true);

      if (!isValid) {
        setValidTableRowCount((prev) => prev + 1);
        setCheckTableRowValid((prev) => ({
          ...prev,
          false: prev["false"] - 1,
        }));
      }
      // Update data in specific array of index
      setResultData((prev) => {
        prev[num - 1] = data;
        return prev;
      });
    } else {
      console.log("set INvalid row", num);
      if (isValid) {
        setValidTableRowCount((prev) => prev - 1);
        setCheckTableRowValid((prev) => ({
          ...prev,
          false: prev["false"] + 1,
        }));
      }

      setIsValid(false);
    }
  }, [data]);

  return (
    <TableRow>
      <TableCell className="table-des">{num}.</TableCell>
      <TableCell className="table-des">
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          maxLength={30}
          className="focus:outline-none bg-gray-100 w-full h-full"
        />
      </TableCell>
      <TableCell className="table-des">
        <input
          type="text"
          value={data.rollNo}
          onChange={(e) => setData({ ...data, rollNo: e.target.value })}
          maxLength={10}
          className="focus:outline-none bg-gray-100 w-full h-full"
        />
      </TableCell>
      <TableCell className="table-des">
        <input
          type="text"
          value={data.English}
          onChange={(e) => setData({ ...data, English: e.target.value })}
          className="focus:outline-none bg-gray-100 w-full h-full"
        />
      </TableCell>
      <TableCell className="table-des">
        <input
          type="text"
          value={data.Math}
          onChange={(e) => setData({ ...data, Math: e.target.value })}
          className="focus:outline-none bg-gray-100 w-full h-full"
        />
      </TableCell>
      <TableCell className="table-des">
        <input
          type="text"
          value={data.Be}
          onChange={(e) => setData({ ...data, Be: e.target.value })}
          className="focus:outline-none bg-gray-100 w-full h-full"
        />
      </TableCell>
      <TableCell className="table-des">
        <input
          type="text"
          value={data.Dld}
          onChange={(e) => setData({ ...data, Dld: e.target.value })}
          className="focus:outline-none bg-gray-100 w-full h-full"
        />
      </TableCell>
      <TableCell className="table-des">
        <input
          type="text"
          value={data.Dc}
          onChange={(e) => setData({ ...data, Dc: e.target.value })}
          className="focus:outline-none bg-gray-100 w-full h-full"
        />
      </TableCell>
      <TableCell className="table-des">
        <input
          type="text"
          value={data.Web}
          onChange={(e) => setData({ ...data, Web: e.target.value })}
          className="focus:outline-none bg-gray-100 w-full h-full"
        />
      </TableCell>
      <TableCell className="table-des">
        <input
          type="text"
          value={data["C++"]}
          onChange={(e) => setData({ ...data, "C++": e.target.value })}
          className="focus:outline-none bg-gray-100 w-full h-full"
        />
      </TableCell>
    </TableRow>
  );
};

export default CreateResultTableRow;
