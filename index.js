// Array.prototype.myFilter = function (callback) {
//   return this.reduce((acc, curr, idx) => {
//     if (callback(curr, idx)) {
//       acc.push(curr)
//     }
//     return acc
//   }, [])
// }
// console.log([1, 2, 3, 4].myFilter((item) => item > 2))



// Array.prototype.mySome = function (callback) {
//   return this.reduce((acc, curr, idx) => {
//     console.log(curr)
//     if (callback(curr, idx)) {
//       this.slice()
//       return true
//     }
//     return acc
//   }, false)
// }
// console.log([1, 2, 3, 4, -1].mySome((item) => item > 2))


// Array.prototype.myEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i], i)) return false
//   }
//   return true
// }
// console.log([1, 2, 3, 4].myEvery((item) => item > 0))


// const condition = false
// const p = new Promise((res, rej) => {
//   return condition ? res('success') : rej('fail')
// })
// p.then(mess => console.log(mess))
//   .catch(mess => console.log(mess))
//   .finally(() => console.log('finally'))



// const condition = true
// const p = new Promise((res, rej) => condition ? res('success') : rej('fail'))
// const p1 = new Promise((res, rej) => condition ? res('success1') : rej('fail'))
// const p2 = new Promise((res, rej) => condition ? res('success2') : rej('fail'))
// Promise.all([
//   p, p1, p2
// ]).then(mess => console.log(mess)).catch(mess => console.log(mess))



// fetch('https://jsonplaceholder.typicode.com/posts?_limit=2', {
//   method: 'GET'
// })
//   .then((response) => {
//     return response.json()
//   }).then((data) => {
//     console.log(data)
//   })


// fetch('https://jsonplaceholder.typicode.com/posts?_limit=2', {
//   method: 'POST',
//   body: JSON.stringify({
//     userId: 1,
//     title: 'post title',
//     body: 'post body'
//   }),
//   headers: {
//     'Content-type': 'application/json;charset=UTF-8'
//   }
// })
//   .then((response) => {
//     return response.json()
//   }).then((data) => {
//     console.log(data)
//   })


// fetch('https://jsonplaceholder.typicode.com/posts?_id=101', {
//   method: 'PUT',
//   body: JSON.stringify({
//     userId: 1,
//     title: 'post title',
//     body: 'post body'
//   }),
//   headers: {
//     'Content-type': 'application/json;charset=UTF-8'
//   }
// })
//   .then((response) => {
//     return response.json()
//   }).then((data) => {
//     console.log(data)
//   })


// const list = document.getElementById('list')
// const getPost = (limit) => {
//   fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
//     .then((response) => {
//       return response.json()
//     }).then((data) => {
//       console.log(data)
//       data.forEach((item) => {
//         const listItem = document.createElement('li')
//         listItem.innerText = item.body
//         list.appendChild(listItem)
//       })
//     })
// }
// getPost(10)


// let currentCount = localStorage.getItem('count') ? localStorage.getItem('count') : 0

// const container = document.getElementById('count')
// const count = document.createElement('p')
// const incrementButton = document.createElement('button')
// incrementButton.innerText = 'Increment'

// count.innerText = currentCount
// const incrementCount = () => {
//   currentCount++
//   count.innerText = currentCount
//   localStorage.setItem('count', currentCount)
// }
// incrementButton.addEventListener('click', incrementCount)
// container.appendChild(count)
// container.appendChild(incrementButton)
// const post = {
//   title: 'post title',
//   body: 'post body'
// }
// localStorage.setItem('post',JSON.stringify(post))


const list = [1, 2, 3, 4, 6, 10, 15]
const number = 7
const getSum = (arr, k) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; i++) {
      if (result.length !== 0) return
      if (arr[i] + arr[j] === k) {

      }
    }
  }
  // const sumExist = arr.some((item, idx) => {
  //   return arr.some((item2, idx2) => {
  //     if (item + item2 === k && idx !== 2 && result.length === 0) {
  //       result.push(item, item2)
  //     }
  //   })
  // })
  return result
}
console.log(getSum(list, number))

