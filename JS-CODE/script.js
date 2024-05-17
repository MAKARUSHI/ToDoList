// INDEX PAGE
document.addEventListener('DOMContentLoaded', function() {

    // USERS DATA

    let usernamesPasswords = JSON.parse(localStorage.getItem("usernamesPasswords")) || [
        {
            username: "batman",
            password: "iAmBatman"
        },{
            username: "majda",
            password: "Medobuba13"
        },{
            username: "melisa",
            password: "babatona"
        }
        ];

    // VARIABLES

    const logInDiv = document.getElementById('logInDiv');
    let logInUsername = document.getElementById('logInUsername');
    const errorText4 = document.getElementById('errorText4');
    let logInPassword = document.getElementById('logInPassword');
    const togglePasswordImg = document.getElementById('togglePasswordImg');
    const errorText3 = document.getElementById('errorText3');
    const btnToLogIn = document.getElementById('btnToLogIn');
    const btnToRegister = document.getElementById('btnToRegister');

    const registerDiv = document.getElementById('registerDiv');
    let registerUsername = document.getElementById('registerUsername');
    const errorText = document.getElementById('errorText');
    let registerPassword = document.getElementById('registerPassword');
    const errorText1 = document.getElementById('errorText1');
    const toggle1PasswordImg = document.getElementById('toggle1PasswordImg');
    const toggle2PasswordImg = document.getElementById('toggle2PasswordImg');
    let register1Password = document.getElementById('register1Password');
    const errorText2 = document.getElementById('errorText2');
    const btnMakeNewUser = document.getElementById('makeNewUser');
    const btnShowLogIn = document.getElementById('btnShowLogIn');

    let inputUsername;
    let inputPassword;
    let existingUser;

    const settingsIcon = document.getElementById('settingsIcon');
    const settingsMainLogo = document.getElementById('settingsMainLogo');
    let settings = document.getElementById('settings');

    // CREATE TASK
    const newTaskContentText = document.getElementById('newTaskContentText');
    
    
    
    
    
    // INDEX PAGE

    if (window.location.href.includes("index.html")){
        
        togglePasswordImg.addEventListener('click', toggleVisibilityPassword);
        toggle1PasswordImg.addEventListener('click', toggleVisibilityPassword);
        toggle2PasswordImg.addEventListener('click', toggleVisibilityPassword);
            
        btnToLogIn.addEventListener('click', function(){
            logInMethod();
        });

        btnToRegister.addEventListener('click', function() {
            registerNewUser();
        });

        btnMakeNewUser.addEventListener('click', function() {
            registerNewUser();
        });

        btnShowLogIn.addEventListener('click', function(){
            registerDiv.style.display = 'none';
            logInDiv.style.display = 'block';
        });

        
        
        function toggleVisibilityPassword() {
            if (logInPassword.type === "password") {
                logInPassword.type = "text";
                registerPassword.type = "text";
                register1Password.type = "text";
            }
            else {
                logInPassword.type = "password";
                registerPassword.type = "password";
                register1Password.type = "password";
            }
        };

        function logInMethod() {
            inputUsername = logInUsername.value;
            inputPassword = logInPassword.value;
            existingUser = usernamesPasswords.find(user => user.username === inputUsername)
            
            if (existingUser) {
                errorText4.style.display = 'none';
                errorText3.style.display = 'none';
        
                if (existingUser.password === inputPassword) {
                    console.log("Login successful!");
                    window.location.href = "HTML-CODE/main.html";
                } else {
                    console.log("Incorrect password!");
                    errorText3.style.display = 'block';
                }
            } else {
                console.log("Username not found!");
                errorText4.style.display = 'block';
                errorText3.style.display = 'block';
            }
        }

        function registerNewUser() {
            if (registerDiv.style.display === 'none' || registerDiv.style.display === '') {
                registerDiv.style.display = 'block';
                logInDiv.style.display = 'none';
            } else {
                if (registerUsername.value.length >= 5 && registerPassword.value.length >= 8 && registerPassword.value === register1Password.value) {
                    errorText.style.display = "none";
                    errorText1.style.display = "none";
                    errorText2.style.display = "none";
                    addNewUser(registerUsername.value, registerPassword.value);
                    registerDiv.style.display = 'none';
                    logInDiv.style.display = 'block';
                } else {
                    errorText.style.display = "block";
                    errorText1.style.display = "block";
                    errorText2.style.display = "block";
                }
            }
        }


    }

    function logInMethod() {
        inputUsername = logInUsername.value;
        inputPassword = logInPassword.value;
        existingUser = usernamesPasswords.find(user => user.username === inputUsername)
        
        if (existingUser) {
            errorText4.style.display = 'none';
            errorText3.style.display = 'none';
    
            if (existingUser.password === inputPassword) {
                console.log("Login successful!");
                window.location.href = "HTML-CODE/main.html";
            } else {
                console.log("Incorrect password!");
                errorText3.style.display = 'block';
            }
        } else {
            console.log("Username not found!");
            errorText4.style.display = 'block';
            errorText3.style.display = 'block';
        }
    }


    // MAIN PAGE

    if (window.location.href.includes("main.html")){
        newTaskContentText.textContent = ''
        const settingsStyle = window.getComputedStyle(settings);
        
        settingsIcon.addEventListener('click', toggleSettings);
        settingsMainLogo.addEventListener('click', toggleSettings);

        
        function toggleSettings() {
            if (settingsStyle.display === 'none') {
                settings.style.display = 'block';
            } else {
                settings.style.display = 'none';
            }
        }



    }

    const addNewUser = (username, password) => {
        usernamesPasswords.push({
            username: username,
            password: password
        });
        localStorage.setItem("usernamesPasswords", JSON.stringify(usernamesPasswords));
        console.log(usernamesPasswords);
    };
    
    console.log(usernamesPasswords);
});

// localStorage.clear();

// MAIN PAGE




// CALENDAR PAGE
if (window.location.href.includes("calendar.html"))
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
        });
        calendar.render();
    });