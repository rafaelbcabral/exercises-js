document.getElementById('cookieBtn').addEventListener('click', function () {
  const input = document.getElementById('cookie')
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2022,9, 9) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
  const input = document.getElementById('cookie2')
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'text=' + input.value + ';'
  const expiration = 'expires=' + new Date(2022, 8, 9) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})