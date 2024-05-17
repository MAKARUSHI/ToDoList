// let usernamesPasswords = JSON.parse(localStorage.getItem("usernamesPasswords")) || [
//     {
//         username: "batman",
//         password: "iAmBatman"
//     },{
//         username: "melisa",
//         password: "babatona"
//     }
//     ];
    
//     document.addEventListener('DOMContentLoaded', function() {
//     const btnToRegisterUser = document.getElementById("btnToRegister");
//     const registerDiv = document.getElementById("registerDiv");
//     const logInDiv = document.getElementById("logInDiv");
    
//     if (window.location.href.includes("index.html")){
//         btnToRegisterUser.addEventListener('click', function() {
//             if (registerDiv.style.display === 'none' || registerDiv.style.display === '') {
//                 registerDiv.style.display = 'block';
//                 logInDiv.style.display = 'none';
//             } else {
//                 registerDiv.style.display = 'none';
//                 logInDiv.style.display = 'block';
//             }
//         });
//     }
    
//     const newUserUsernameInput = document.getElementById("registerUsername");
//     const newUserPasswordInput = document.getElementById("registerPassword");
//     const newUser2PasswordInput = document.getElementById("register2Password");
    
//     const newUserUsername = newUserUsernameInput.value.trim(); 
//     const newUserPassword = newUserPasswordInput.value.trim(); 
//     const newUser2Password = newUser2PasswordInput.value.trim();
//     const errorText = document.getElementById("errorText")
//     const errorText1 = document.getElementById("errorText1")
//     const errorText2 = document.getElementById("errorText2")
//     const errorText3 = document.getElementById("errorText3")
//     const errorText4 = document.getElementById("errorText4")
    
//     if (window.location.href.includes("index.html")){
//         makeNewUser.addEventListener('click', function() {
            
            
//             if (newUserUsername.length >= 5 && newUserPassword.length >= 8 && newUserPassword === newUser2Password) {
//                 errorText.style.display = "none";
//                 errorText1.style.display = "none";
//                 errorText2.style.display = "none";
//                 addNewUser(newUserUsername, newUserPassword);
//             } else {
//                 errorText.style.display = "block";
//                 errorText1.style.display = "block";
//                 errorText2.style.display = "block";
//             };
//         });
//     }
    
//     const addNewUser = (newUsername, newPassword) => {
//         usernamesPasswords.push({
//             username: newUsername,
//             password: newPassword
//         });
//         localStorage.setItem("usernamesPasswords", JSON.stringify(usernamesPasswords));
//         console.log(usernamesPasswords)
//     };
    
//     const btnToLogIn = document.getElementById("btnToLogIn");
    
//     function logInMethod() {
//         const usedUsername = document.getElementById("logInUsername").value.trim();
//         const usedPassword = document.getElementById("logInPassword").value.trim();
    
//         const errorText3 = document.getElementById('errorText3');
//         const errorText4 = document.getElementById('errorText4');
//         let existingUser = usernamesPasswords.find(user => user.username === usedUsername);
    
//         if (existingUser) {
//             errorText4.style.display = 'none';
//             errorText3.style.display = 'none';
//             if (existingUser.password === usedPassword) {
//                 errorText4.style.display = 'none';
//                 errorText3.style.display = 'none';
//                 username = existingUser;
//                 console.log("Login successful!");
//                 window.location.href = "HTML-CODE/main.html";
                
//             } else {
//                 console.log("Incorrect password!");
//                 errorText3.style.display = 'block';
//             }
//         } else {
//             console.log("Username not found!");
//             errorText4.style.display = 'block';
//             errorText3.style.display = 'block';
//         }
//     }
    
//     // Assuming registerDiv and logInDiv are defined somewhere else in your code
    
//     if (window.location.href.includes("index.html")) {
          
//     };
//     });
    
//     const btnToShowLogIn = document.getElementById('btnToShowLogIn');
    
//     function showLogInDiv(btnToShowLogIn) {
//         if (btnToShowLogIn.click && logInDiv.style.display === 'none') {
//             logInDiv.style.display = 'block';
//             registerDiv.style.display = 'none';
//         } else if (btnToShowLogIn.click && logInDiv.style.display === 'block') {
//             handleBtnToLogInClick(registerDiv, logInDiv);
//         }
//     }
    
//     function handleBtnToLogInClick(registerDiv, logInDiv) {
//         registerDiv.style.display = 'none';
//         logInDiv.style.display = 'block';
//         logInMethod();
//     };
//     const togglePasswordImg = document.getElementById('togglePasswordImg');
    
//     function toggleVisibilityPassword() {
//         let temp = document.getElementById("logInPassword");
//         let temp1 = document.getElementById("registerPassword");
//         let temp2 = document.getElementById("register2Password");
         
//         if (temp.type === "password" || temp1.type === "password" || temp2.type === "password") {
//             temp.type = "text";
//             temp1.type = "text";
//             temp2.type = "text";
//         }
//         else {
//             temp.type = "password";
//             temp1.type = "password";
//             temp2.type = "password";
//         }
//     };
    
    
    
    
//     // localStorage.clear();
//     console.log(usernamesPasswords)
    
//     // MAIN PAGE
    
    
    
    
//     // CALENDAR PAGE
//     if (window.location.href.includes("calendar.html"))
//         document.addEventListener('DOMContentLoaded', function() {
//             var calendarEl = document.getElementById('calendar');
//             var calendar = new FullCalendar.Calendar(calendarEl, {
//             initialView: 'dayGridMonth'
//             });
//             calendar.render();
//         });
    
    