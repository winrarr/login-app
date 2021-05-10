document.addEventListener('DOMContentLoaded', setup, false)

function setup() {
    document.getElementById("password").addEventListener("keydown", event => {
        if (event.key == "Enter") {
          login()
        }
    })
}

var session = null

async function login() {
    const pass = new TextEncoder().encode(document.getElementById("password").value)
    console.log(await crypto.subtle.digest("SHA-256", pass))
    alert(document.getElementById("password").value)

    const response = await fetch("/login", {
        method: "POST",
        body: {
            username: document.getElementById("username").value,
            password: pass
        }
    })
    document.cookie = await response.text()

    location.href = "frontpage.html"
}

async function register() {
    const pass = new TextEncoder().encode(document.getElementById("password").value)

    alert(await crypto.subtle.digest("SHA-256", pass))
    const response = await fetch("/register", {
        method: "POST",
        body: {
            username: document.getElementById("username").value,
            password: pass
        }
    })
    document.cookie = await response.text()

    location.href = "frontpage.html"
}

function sessionid() {
    console.log(document.cookie)
}