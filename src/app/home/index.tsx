/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";
import previewImage from "../../assets/image_calendar.png";
import Image from "next/image";
import ClainUsernameForm from "../components/ClaimUsernaneForm";
export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento Descomplicado</Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClainUsernameForm/>
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          alt="calendario"
          height={400}
          // quality={100}
          priority
        />
      </Preview>
    </Container>
  );
}
