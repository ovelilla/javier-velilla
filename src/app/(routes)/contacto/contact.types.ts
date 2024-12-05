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

export type { FormDataType, FormErrorsType };
