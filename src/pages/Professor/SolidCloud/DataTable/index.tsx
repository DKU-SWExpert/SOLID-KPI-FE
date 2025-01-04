import { DataTableProps } from "../types";

const DataTable = ({ data }: DataTableProps) => (
  <div className="table-responsive mt-4">
    <table className="table table-dark">
      <thead>
        <tr>
          <th className="text-center bg-white text-dark"></th>
          {data.labels.map((year: string) => (
            <th key={year} className="text-center bg-white text-dark">
              {year}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-left ">총 User 수</td>
          {data.datasets[1].data.map((value: number, index: number) => (
            <td key={index} className="text-center">
              {value}
            </td>
          ))}
        </tr>
        <tr>
          <td className="text-left">목표</td>
          {data.datasets[0].data.map((value: number, index: number) => (
            <td key={index} className="text-center">
              {value}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

export default DataTable;
