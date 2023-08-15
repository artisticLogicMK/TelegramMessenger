const form = document.getElementById('myForm')

form.addEventListener('submit', function(event) {
  event.preventDefault() // Prevents the default form submission behavior
  
  // indicate loading
  document.querySelector('#alert').style.display = "inline-block"
  document.querySelector('#alert').classList.remove("success", "fail") // clear previous alert
  
  // Access form data/credentials
  const botIDAndToken = document.querySelector('textarea[name="botIDAndToken"]').value
  const groupID = document.querySelector('input[name="groupID"]').value
  const message = document.querySelector('textarea[name="message"]').value
  
  // Construct the URL
  const url = `https://api.telegram.org/bot${botIDAndToken}/sendMessage?chat_id=${groupID}&text=${encodeURIComponent(message)}`
  
  // Send the request
  axios.get(url)
    .then(response => {
      document.querySelector('#alert').classList.add("success")
    })
    .catch(error => {
      document.querySelector('#alert').classList.add("fail")
    })
})

// add focus to inputs when outer parent container is clicked
document.querySelectorAll('.inputContainer').forEach(function(container){
  container.addEventListener('click', function(event) {
    container.querySelector('input, textarea').focus()
  })
})