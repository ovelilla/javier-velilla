type ContactComponentPropsType = {
  color?: "primary" | "secondary";
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

export type { ContactComponentPropsType, FormDataType, FormErrorsType };
