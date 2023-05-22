/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Button, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { Form } from "./styles";

export default function ClainUsernameForm() {
  return (
    <Form as="form">
        <TextInput size="sm" prefix="ignite.com/" placeholder="Seu usuário" />
        <Button size="sm"  type="submit">Reservar
            <ArrowRight />
        </Button>
    </Form>
  );
}
