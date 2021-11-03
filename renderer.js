document.getElementById('mailFrom').addEventListener('input', async() => {
  await window.mailContext.mailFrom()  
})

document.getElementById('mailTo').addEventListener('input', async() => {
  await window.mailContext.mailTo()  
})

document.getElementById('sendMail').addEventListener('click', async () => {
  await window.mailContext.send()
  console.log('aa45a4')
})
