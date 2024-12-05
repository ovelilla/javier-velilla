// Vendors
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("El correo electrónico no es válido"),
  message: z.string().min(1, "El mensaje es requerido"),
});

export { schema };
