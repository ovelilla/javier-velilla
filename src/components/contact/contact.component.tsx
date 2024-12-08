"use client";
// Components
import { Button } from "@/components/button";
import { Error } from "@/components/contact/components/error";
import { Field } from "@/components/contact/components/field";
import { Input } from "@/components/contact/components/input";
import { Label } from "@/components/contact/components/label";
import { Message } from "@/components/contact/components/message";
import { Textarea } from "@/components/contact/components/textarea";
// Hooks
import { ContatHook } from "./contact.hook";
// Types
import { ContactComponentPropsType } from "./contact.types";

const ContactComponent = ({ color = "primary" }: ContactComponentPropsType) => {
  const { formData, formErrors, message, loading, handleChange, handleSubmit } =
    ContatHook();

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
          disabled={loading}
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
          disabled={loading}
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
          disabled={loading}
          error={formErrors.message}
          id="message"
          name="message"
          onChange={handleChange}
          rows={3}
          value={formData.message}
        />
        <Error error={formErrors.message} />
      </Field>

      <Button
        className="mt-12 self-end"
        color={color}
        disabled={loading}
        type="submit"
      >
        Enviar
      </Button>

      <Message color={color} message={message} />
    </form>
  );
};

export { ContactComponent };
