export interface SubItem {
  id: string;
  label: string;
  path?: string;
  icon?: string;
  permission?: string;
  onClick?: () => void;
  isCheckbox?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface Item {
  id: string;
  path?: string;
  label: string;
  icon?: string;
  permission?: string;
  subItems: SubMenu[];
}
