import { spawn } from 'child_process'

const log = data => {
  console.log(`stdout: ${data}`)
}

const log2 = data => {
  console.log(`stdout2: ${data}`)
}

const server1 = spawn('env', ['PORT=5001', 'node', 'startTracker.js'])

const server2 = spawn('env', ['PORT=5002', 'node', 'startTracker.js'])


server1.stdout.on('data', log)
server1.stderr.on('data', log)
server1.on('error', log)
server1.on('close', log)

server2.stdout.on('data', log2)
server2.stderr.on('data', log2)
server2.on('error', log2)
server2.on('close', log2)
