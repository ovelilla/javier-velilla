// Vendors
import { ChangeEvent } from "react";
// Actions
import { send } from "./contact.actions";
// Schemas
import { schema } from "./contact.schemas";
// Types
import { ContatHandlersPropsType } from "./contact.types";

const changeHandler = ({
  event,
  setFormData,
  setFormErrors,
}: Pick<ContatHandlersPropsType, "setFormData" | "setFormErrors"> & {
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
}) => {
  setFormData((prev) => ({
    ...prev,
    [event.target.name]: event.target.value,
  }));
  setFormErrors((prev) => ({
    ...prev,
    [event.target.name]: undefined,
  }));
};

const submitHandler = async ({
  event,
  formData,
  setFormData,
  setFormErrors,
  setLoading,
  setMessage,
}: Pick<
  ContatHandlersPropsType,
  "setFormData" | "setFormErrors" | "setLoading" | "setMessage"
> & {
  event: React.FormEvent<HTMLFormElement>;
  formData: { name: string; email: string; message: string };
}) => {
  event.preventDefault();

  setLoading(true);

  const result = schema.safeParse(formData);
  if (!result.success) {
    const zodErrors = result.error.formErrors.fieldErrors;
    setFormErrors({
      name: zodErrors.name ? zodErrors.name[0] : undefined,
      email: zodErrors.email ? zodErrors.email[0] : undefined,
      message: zodErrors.message ? zodErrors.message[0] : undefined,
    });
    setLoading(false);
    return;
  }

  const success = await send(formData);

  if (success) {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setMessage(
      "Mensaje enviado correctamente. Me pondré en contacto contigo lo antes posible.",
    );
  } else {
    setMessage(
      "Hubo un error al enviar el email. Por favor, inténtalo de nuevo.",
    );
  }

  setLoading(false);
};

const ContatHandlers = ({
  formData,
  setFormData,
  setFormErrors,
  setMessage,
  setLoading,
}: ContatHandlersPropsType) => {
  return {
    handleChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => changeHandler({ event, setFormData, setFormErrors }),
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) =>
      submitHandler({
        event,
        formData,
        setFormData,
        setFormErrors,
        setLoading,
        setMessage,
      }),
  };
};

export { ContatHandlers };
