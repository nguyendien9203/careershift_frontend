import { USER_STATUS } from "../constants/userStatus";

export interface Permission {
  _id: string;
  name: string;
  description?: string;
}

export interface PermissionCategory {
  category: string;
  permissions: Permission[];
}

export interface Role {
  _id: string;
  name: string;
  permissions?: Permission[];
}

export interface User {
  _id: string;
  email: string;
  name?: string;
  phone?: string;
  status: USER_STATUS;
  verified: boolean;
  roles: Role;
  createdAt?: string;
  updatedAt?: string;
}
