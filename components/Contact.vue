<template>
  <div
    id="contact-form"
    class="flex flex-col items-center justify-center gap-[40px] font-noto"
  >
    <h1 class="text-white text-[24px]">¡Envíame un mensaje!</h1>
    <form
      ref="form"
      @submit.prevent="sendEmail"
      class="bg-gray-800 p-6 rounded-lg shadow-custom border border-gray-700 text-white flex flex-col w-[500px] gap-[20px] items-center"
    >
      <label for="name">Nombre:</label>
      <input
        class="p-1 text-black w-[300px] rounded"
        id="name"
        type="text"
        name="name"
      />
      <p v-if="errors.name" class="text-red-500 text-center">{{ errors.name }}</p>

      <label for="surname">Apellido:</label>
      <input
        class="p-1 text-black w-[300px] rounded"
        id="surname"
        type="text"
        name="surname"
      />
      <p v-if="errors.surname" class="text-red-500 text-center">{{ errors.surname }}</p>

      <label for="email">Email:</label>
      <input
        class="p-1 text-black w-[300px] rounded"
        id="email"
        type="email"
        name="email"
      />
      <p v-if="errors.email" class="text-red-500 text-center">{{ errors.email }}</p>

      <label for="message">Mensaje:</label>
      <textarea
        class="p-1 text-black w-[300px] mb-[50px] rounded"
        id="message"
        name="message"
      ></textarea>
      <p v-if="errors.message" class="text-red-500 text-center mb-[20px]">
        {{ errors.message }}
      </p>

      <img v-if="isSending" :src="loadingGif" alt="loading_gif" />
      <button
        v-else
        type="submit"
        class="bg-blue-500 text-white p-2 rounded-lg border border-blue-700 hover:bg-blue-700 hover:scale-[1.05] transition-all duration-300 ease-out mb-[20px]"
      >
        Enviar
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import { ref, reactive } from 'vue'
import loadingGif from "/loading_gif.gif"

const form = ref<HTMLFormElement | null>(null)
const isSending = ref(false)

const errors = reactive({
  name: '',
  surname: '',
  email: '',
  message: '',
})

const config = useRuntimeConfig()
const SERVICE_ID = config.public.SERVICE_ID
const TEMPLATE_ID = config.public.TEMPLATE_ID
const PUBLIC_KEY = config.public.PUBLIC_KEY

const validateForm = () => {
  const name = (form.value?.elements.namedItem('name') as HTMLInputElement)?.value
  const surname = (form.value?.elements.namedItem('surname') as HTMLInputElement)?.value
  const email = (form.value?.elements.namedItem('email') as HTMLInputElement)?.value
  const message = (form.value?.elements.namedItem('message') as HTMLTextAreaElement)?.value

  const nameSurnameRegex = /^[a-zA-ZñÑ\s]+$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  let valid = true
  errors.name = errors.surname = errors.email = errors.message = ''

  if (!name) {
    errors.name = 'El nombre es obligatorio.'
    valid = false
  } else if (!nameSurnameRegex.test(name)) {
    errors.name = 'El nombre solo debe contener letras y espacios.'
    valid = false
  }

  if (!surname) {
    errors.surname = 'El apellido es obligatorio.'
    valid = false
  } else if (!nameSurnameRegex.test(surname)) {
    errors.surname = 'El apellido solo debe contener letras y espacios.'
    valid = false
  }

  if (!email) {
    errors.email = 'El email es obligatorio.'
    valid = false
  } else if (!emailRegex.test(email)) {
    errors.email = 'Por favor, ingrese un email válido.'
    valid = false
  }

  if (!message) {
    errors.message = 'El mensaje es obligatorio.'
    valid = false
  }

  return valid
}

const sendEmail = async () => {
  if (!validateForm()) return

  if (form.value) {
    isSending.value = true
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.value, PUBLIC_KEY)

      Swal.fire({
        title: 'Enviado!',
        text: 'Mensaje enviado exitosamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      })
      form.value.reset()
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema enviando el mensaje, por favor intenta de nuevo.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      })
    } finally {
      isSending.value = false
    }
  }
}
</script>

<style scoped>
.shadow-custom {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
