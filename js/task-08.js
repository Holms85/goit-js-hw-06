const refs = document.querySelector(".login-form");

refs.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  }
  console.log({
    email: email.value,
    password: password.value,
  });
  e.currentTarget.reset();
});
