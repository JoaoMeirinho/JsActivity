function promise(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('hey, sou a promise.');
      resolve();
    },2000)
  })
}

export default async function () {
  await promise();
  console.log('terminou')
}