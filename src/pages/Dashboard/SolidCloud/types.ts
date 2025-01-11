export type ChartData = {
  labels: string[];
  datasets: {
    label?: string;
    backgroundColor: string | string[];
    borderColor: string | string[];
    borderWidth: number;
    data: number[];
  }[];
} | null;

export interface ChartDataType {
  labels: string[];
  datasets: {
    type: "bar" | "line";
    label?: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string | string[];
    borderWidth?: number;
    tension?: number;
    order?: number;
  }[];
}

export interface DataTableProps {
  data: ChartDataType;
}

export interface ChartCardProps {
  years: number[];
  title: string;
  initialData: {
    labels: string[];
    datasets: {
      label?: string;
      backgroundColor: string | string[];
      borderColor: string | string[];
      borderWidth: number;
      data: number[];
    }[];
  } | null;
  chartOptions: any;
  onYearChange?: (year: number) => void;
}
