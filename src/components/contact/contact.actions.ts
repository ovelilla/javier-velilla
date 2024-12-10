"use server";

// Vendors
import { Resend } from "resend";
// Types
import { FormDataType } from "./contact.types";
// Templates
import { ContactTemplate } from "./contact.template";

async function send(formData: FormDataType) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: "Contacto desde el sitio web <contacto@javiervelilla.com>",
      to: ["javier.velilla47@gmail.com", "o.velillaa@gmail.com"],
      replyTo: formData.email,
      subject: "Contacto desde el sitio web",
      react: ContactTemplate(formData),
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export { send };
