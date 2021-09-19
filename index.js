function sendForm(data) {
  fetch('//api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log(response.json())
      alert('The form has been sent successfully!');
      document.getElementById('signup-form').reset()
    })
    .catch(error => {
      console.error(error);
      return alert('An error has occurred! The API isn\'t configured yet... The form hasn\'t been sent.\n\n' + error)
    })
}

function validateForm() {
  let username = document.getElementById('signup-name').value
  let email = document.getElementById('signup-email').value
  let password = document.getElementById('signup-password').value

  let formData = { userName: null, email: null, password: null };

  if (username.match(/^([A-Za-z]|[А-Яа-я])+$/)) {
    formData.userName = username;

    if (email.match(/^\S+@\S+\.\S+$/)) {
      formData.email = email;

      if (password.match(/^.{6,}$/)) {
        formData.password = password;

        return sendForm(formData)
      } else {
        return alert('The password must consist of more than 6 characters.')
      }
    } else {
      return alert('You have entered an invalid email address!')
    }
  } else {
    return alert('The user name must contain only alphabet letters without spaces.')
  }
}

function switchTheme() {
  if (document.documentElement.hasAttribute('theme')) {
    document.documentElement.removeAttribute('theme');
    document.getElementById('svg-sun').setAttribute('style', 'display: none;');
    document.getElementById('svg-moon').setAttribute('style', 'display: block;');
  } else {
    document.getElementById('svg-sun').setAttribute('style', 'display: block;');
    document.getElementById('svg-moon').setAttribute('style', 'display: none;');
    document.documentElement.setAttribute('theme', 'dark');
  }
}