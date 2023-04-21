import dgram from "node:dgram"


const udpConnection = dgram.createSocket("udp4")

const PORT = 3737

const HOST = "127.0.0.1"

udpConnection
  .bind(PORT, HOST)
  .on('listening', () => {
    console.log("listning for udp connection")
  })
  .on("message", (message, rinfo)=> {
  console.log("message", message.toString(), "info", rinfo.address, rinfo.port)
})