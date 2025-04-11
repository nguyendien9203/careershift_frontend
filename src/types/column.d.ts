export interface Option {
  key: string;
  label: string;
}

export interface Column {
  title: string;
  key: string;
  classes?: string;
  sortable?: boolean;
  filterable?: boolean;
  sortOptions?: Option[];
  filterOptions?: Option[];
}
