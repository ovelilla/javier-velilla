"use client";
// Vendors
import { useState } from "react";
// Handlers
import { ContatHandlers } from "./contact.handlers";
// Types
import { FormDataType, FormErrorsType } from "./contact.types";

const ContatHook = () => {
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
  const [loading, setLoading] = useState(false);

  const { handleChange, handleSubmit } = ContatHandlers({
    formData,
    setFormData,
    setFormErrors,
    setMessage,
    setLoading,
  });

  return { formData, formErrors, message, loading, handleChange, handleSubmit };
};

export { ContatHook };
