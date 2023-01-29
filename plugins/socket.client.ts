import io from 'socket.io-client'

export default defineNuxtPlugin(() => {
    const $config = useRuntimeConfig();
    const socket = io('https://trtr.azurewebsites.net') // https://trtr.azurewebsites.net // https://192.168.17.65:3000/
    return {
        provide: {
            socket: socket
        }
    }
})