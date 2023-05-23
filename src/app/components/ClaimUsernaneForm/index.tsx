/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Button, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { Form, FormAnnotation } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

const clainUsernameFormSchema = z.object({
	username: z
	.string()
	.min(3, {message: 'Minímo de 3 letras'})
	.regex(/^([a-z\\-]+)$/i, {message: 'O usário pode ter apenas letras e hifens'})
	.transform(value => value.toLowerCase()),
})

type ClainUsernameFormData = z.infer<typeof clainUsernameFormSchema>

export default function ClainUsernameForm() {

	const { 
		register, 
		handleSubmit, 
		formState: {errors},
	 } = useForm<ClainUsernameFormData>({
		resolver: zodResolver(clainUsernameFormSchema)
	})

	const handleClainUsername = async(data: ClainUsernameFormData ) => {
		console.log(data)
	}

  return (
		<>
			<Form as="form" onSubmit={handleSubmit(handleClainUsername)}>
				<TextInput size="sm" prefix="ignite.com/" placeholder="Seu usuário" {...register('username')}/>
				<Button size="sm"  type="submit">Reservar
						<ArrowRight />
				</Button>
			</Form>
			<FormAnnotation>
				<Text size="sm">
					{errors.username ? 
						errors.username.message : 
						'Digite o nome do usuário desejado'}
				</Text>
			</FormAnnotation>
	</>
  );
}
