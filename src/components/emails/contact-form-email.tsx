import { z } from "zod";
import { ContactFormSchema } from "@/lib/schema";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { siteConfig } from "../../config/site";

type FormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactFormEmail({ message, email }: FormInputs) {
  return (
    <Html>
      <Head />
      <Preview>{`New message from your ${siteConfig.name} site`}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
