const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
}

const getTodos = (userId) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
}

const promise = getUsers()

promise
  .then((resp) => { // resolve(<respuesta>)
    console.log({ resp })
    const promiseData = resp.json()
    return promiseData
  })
  .then((data) => {
    console.log('USUARIOS: ', data)
    const usuario1 = data[0]
    return getTodos(usuario1.id)
  })
  .then((resp) => {
    return resp.json()
  })
  .then(todos => {
    console.log('TODOS: ', todos)
  })

console.log('FIN')

const customPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hola Ángel')
  }, 3000)
})

customPromise
  .then(msg => alert(msg))