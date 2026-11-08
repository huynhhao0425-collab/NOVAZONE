let registerForm = document.getElementById("register-form")

registerForm.addEventListener("submit", function(event) {
    event.preventDefault()

    // 1. Lấy thông tin từ giao diện
    let EMAIL = registerForm.EMAIL.value.trim()
    let PASSWORD = registerForm.PASSWORD.value.trim()
    let RE_PASSWORD = registerForm.RE_PASSWORD.value.trim()
    let USERNAME = registerForm.USERNAME.value.trim()

    console.log(EMAIL, PASSWORD, RE_PASSWORD, USERNAME)

    // 2. Kiểm tra thông tin và thông báo
    
    // 3. Lưu thông tin
    let user = {
        EMAIL: EMAIL,
        PASSWORD: PASSWORD,
        USERNAME: USERNAME
    }

    let accounts;
    if (localStorage.getItem("accounts") === null){
        accounts = []
    }
    else {
        accounts = JSON.parse(localStorage.getItem("accounts"))
    }
    // console.log(accounts)
    // Kiểm tra có trùng thông tin không

    // Lưu thông tin
    accounts.push(user)
    localStorage.setItem("accounts", JSON.stringify(accounts))
    // 4. Thông báo đăng ký thành công
    alert("Đăng ký tài khoản thành công")
    // 5. Chuyển sang trang đăng nhập

})

