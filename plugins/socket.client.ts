import io from 'socket.io-client'

export default defineNuxtPlugin(() => {
    const $config = useRuntimeConfig();
    const socket = io('https://trtr.azurewebsites.net:8080/') // https://trtr.azurewebsites.net // http://192.168.17.65:3001/
    return {
        provide: {
            socket: socket
        }
    }
})