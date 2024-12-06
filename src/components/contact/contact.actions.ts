"use server";

// Vendors
import { Resend } from "resend";
// Types
import { FormDataType } from "./contact.types";

async function send(formData: FormDataType) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["o.velillaa@gmail.com"],
      subject: "Contacto desde el sitio web",
      html: `${formData.message}`,
    });
    console.log(data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export { send };
