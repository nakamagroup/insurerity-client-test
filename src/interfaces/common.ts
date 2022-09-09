export interface IButton {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

export interface ITableSkeleton {
  numRows: number;
}
