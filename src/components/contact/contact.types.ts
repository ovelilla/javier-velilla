// Vendors
import { Dispatch, SetStateAction } from "react";

type ContactComponentPropsType = {
  color?: "primary" | "secondary";
};

type ContatHandlersPropsType = {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  setFormErrors: Dispatch<SetStateAction<FormErrorsType>>;
  setMessage: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

type FormDataType = {
  name: string;
  email: string;
  message: string;
};

type FormErrorsType = {
  name?: string;
  email?: string;
  message?: string;
};

export type {
  ContactComponentPropsType,
  ContatHandlersPropsType,
  FormDataType,
  FormErrorsType,
};
