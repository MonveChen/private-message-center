const execSync = require('child_process').execSync

const { version, name } = require('../package')

let command = `docker build --pull --rm -f "Dockerfile" -t monve/${name}:${version} "."`
console.log(command)
execSync(command)

command = `docker push monve/${name}:${version}`
console.log(command)
execSync(command)

command = `docker tag monve/${name}:${version} monve/${name}:latest`
console.log(command)
execSync(command)

command = `docker push monve/${name}:latest`
console.log(command)
execSync(command)

command = `docker rmi monve/${name}:${version} && docker rmi monve/${name}:latest`
console.log(command)
execSync(command)

process.exit(0)