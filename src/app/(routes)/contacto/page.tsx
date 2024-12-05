"use client";

// Components
import { Container } from "@/components/container";
import { ContactComponent } from "@/components/contact/contact.component";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

const Contacto = () => {
  return (
    <Section>
      <Container className="items-center">
        <Title>Contacto</Title>

        <ContactComponent />
      </Container>
    </Section>
  );
};

export default Contacto;
