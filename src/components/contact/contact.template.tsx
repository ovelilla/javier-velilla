// Types
import { FormDataType } from "./contact.types";

import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Hr,
} from "@react-email/components";
import * as React from "react";

const ContactTemplate = ({ name, email, message }: FormDataType) => {
  const previewText = `Nuevo mensaje de ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>Nuevo mensaje de {name}</Text>
              <Text style={messageBox}>{message}</Text>
              <Text style={paragraph}>
                Puedes responder a este mensaje a través de la dirección de
                email <strong>{email}</strong>. También puedes responder
                seleccionando el botón de responder de Gmail.
              </Text>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={footer}>
              Este mensaje se ha enviado automáticamente desde tu sitio web.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const messageBox = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

export { ContactTemplate };
