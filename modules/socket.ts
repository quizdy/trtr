import { Server } from 'socket.io'

export default (_: any, nuxt: any) => {
    nuxt.hook('listen', (server: any) => {
        const io = new Server(server)

        nuxt.hook('close', () => io.close())
        
        io.on('connection', (socket) => {
            console.info("connection:", socket.id)

            socket.on("disconnect", () => {
              console.info("disconnect:", socket.id);
            });

            socket.on("msg", (params) => {
              console.info("msg", params)
              io.emit("msg", params);
            });
        })
    })
}