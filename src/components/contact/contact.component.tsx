"use client";
// Vendors
import { useState } from "react";
// Actions
import { send } from "./contact.actions";
// Components
import { Button } from "@/components/button";
import { Error } from "@/components/contact/components/error";
import { Field } from "@/components/contact/components/field";
import { Input } from "@/components/contact/components/input";
import { Label } from "@/components/contact/components/label";
import { Message } from "@/components/contact/components/message";
import { Textarea } from "@/components/contact/components/textarea";
// Schemas
import { schema } from "./contact.schemas";
// Types
import {
  ContactComponentPropsType,
  FormDataType,
  FormErrorsType,
} from "./contact.types";

const ContactComponent = ({ color = "primary" }: ContactComponentPropsType) => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrorsType>({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [event.target.name]: undefined,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = schema.safeParse(formData);
    if (!result.success) {
      const zodErrors = result.error.formErrors.fieldErrors;
      setFormErrors({
        name: zodErrors.name ? zodErrors.name[0] : undefined,
        email: zodErrors.email ? zodErrors.email[0] : undefined,
        message: zodErrors.message ? zodErrors.message[0] : undefined,
      });
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
  };
  return (
    <form
      className="flex w-full max-w-2xl flex-col gap-6 xl:gap-12"
      onSubmit={handleSubmit}
    >
      <Field>
        <Label htmlFor="name" color={color}>
          Nombre
        </Label>
        <Input
          color={color}
          error={formErrors.name}
          id="name"
          name="name"
          onChange={handleChange}
          type="text"
          value={formData.name}
        />
        <Error error={formErrors.name} />
      </Field>

      <Field>
        <Label htmlFor="email" color={color}>
          Correo
        </Label>
        <Input
          color={color}
          error={formErrors.email}
          id="email"
          name="email"
          onChange={handleChange}
          type="email"
          value={formData.email}
        />
        <Error error={formErrors.email} />
      </Field>

      <Field>
        <Label htmlFor="message" color={color}>
          Mensaje
        </Label>
        <Textarea
          color={color}
          error={formErrors.message}
          id="message"
          name="message"
          onChange={handleChange}
          rows={3}
          value={formData.message}
        />
        <Error error={formErrors.message} />
      </Field>

      <Button className="mt-12 self-end" color={color} type="submit">
        Enviar
      </Button>

      <Message message={message} />
    </form>
  );
};

export { ContactComponent };
