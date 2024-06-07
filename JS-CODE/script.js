document.addEventListener('DOMContentLoaded', function() {
    // USERS DATA
    let usernamesPasswords = JSON.parse(localStorage.getItem("usernamesPasswords")) || [
        { username: "urban", password: "123456789" },
        { username: "majda", password: "Medobuba13" },
        { username: "melisa", password: "987654321" }
    ];

    // VARIABLES
    const logInDiv = document.getElementById('logInDiv');
    const logInUsername = document.getElementById('logInUsername');
    const errorText4 = document.getElementById('errorText4');
    const logInPassword = document.getElementById('logInPassword');
    const togglePasswordImg = document.getElementById('togglePasswordImg');
    const errorText3 = document.getElementById('errorText3');
    const btnToLogIn = document.getElementById('btnToLogIn');
    const btnToRegister = document.getElementById('btnToRegister');

    const registerDiv = document.getElementById('registerDiv');
    const registerUsername = document.getElementById('registerUsername');
    const errorText = document.getElementById('errorText');
    const registerPassword = document.getElementById('registerPassword');
    const errorText1 = document.getElementById('errorText1');
    const toggle1PasswordImg = document.getElementById('toggle1PasswordImg');
    const toggle2PasswordImg = document.getElementById('toggle2PasswordImg');
    const register1Password = document.getElementById('register1Password');
    const errorText2 = document.getElementById('errorText2');
    const btnMakeNewUser = document.getElementById('makeNewUser');
    const btnShowLogIn = document.getElementById('btnShowLogIn');

    const settingsIcon = document.getElementById('settingsIcon');
    const settingsMainLogo = document.getElementById('settingsMainLogo');
    const settings = document.getElementById('settings');

    // CREATE TASK
    const createTaskDiv = document.getElementById('createTaskDiv');
    const createTaskIcon = document.getElementById('createTaskIcon');
    const newTaskContentText = document.getElementById('newTaskContentText');
    const newTaskTitleInput = document.getElementById('newTaskTitleInput');
    const showedTasks = document.getElementById('showedTasks');
    const cancelTaskBtn = document.getElementById('cancelTaskBtn');
    const createTaskBtn = document.getElementById('createTaskBtn');
    const errorText5 = document.getElementById('errorText5');

    let currentTaskIndex = -1;

    // PROFILE DIV

    const profileMainDiv = document.getElementById("profileMainDiv");
    const mainProfileIcon = document.getElementById("mainIcon");
    const profileIcon = document.getElementById("profileIcon");


    // Load tasks from local storage when the page loads
    if (window.location.href.includes("index.html")) {
        // INDEX PAGE
        togglePasswordImg.addEventListener('click', toggleVisibilityPassword);
        toggle1PasswordImg.addEventListener('click', toggleVisibilityPassword);
        toggle2PasswordImg.addEventListener('click', toggleVisibilityPassword);

        btnToLogIn.addEventListener('click', logInMethod);
        btnToRegister.addEventListener('click', registerNewUser);
        btnMakeNewUser.addEventListener('click', registerNewUser);

        btnShowLogIn.addEventListener('click', function() {
            registerDiv.style.display = 'none';
            logInDiv.style.display = 'block';
        });

        function toggleVisibilityPassword() {
            const passwordFields = [logInPassword, registerPassword, register1Password];
            passwordFields.forEach(field => {
                field.type = field.type === "password" ? "text" : "password";
            });
        }

        function logInMethod() {
            const inputUsername = logInUsername.value;
            const inputPassword = logInPassword.value;
            const existingUser = usernamesPasswords.find(user => user.username === inputUsername);

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

        function addNewUser(username, password) {
            usernamesPasswords.push({ username, password });
            localStorage.setItem("usernamesPasswords", JSON.stringify(usernamesPasswords));
            console.log(usernamesPasswords);
        }
    } else if (window.location.href.includes("main.html")) {
        // MAIN PAGE

        loadTasksFromLocalStorage();

        createTaskIcon.addEventListener('click', createNewTaskDivShowed);
        cancelTaskBtn.addEventListener('click', createNewTaskDivShowed);

        function createNewTaskDivShowed() {
            newTaskTitleInput.value = '';
            newTaskContentText.value = '';
            createTaskDiv.style.display = (createTaskDiv.style.display === 'none' || createTaskDiv.style.display === '') ? 'block' : 'none';
        }

        createTaskBtn.addEventListener('click', createNewTask);

        function loadTasksFromLocalStorage() {
            showedTasks.innerHTML = ''; // Clear existing tasks

            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.forEach((task, index) => {
                let taskContainer = document.createElement('div');
                taskContainer.classList.add('task');

                let titleElement = document.createElement('span');
                titleElement.classList.add('title');
                titleElement.innerHTML = `${index + 1}. ${addLineBreaks(task.title, 60)}`; // Add task number before the title

                let contentElement = document.createElement('span');
                contentElement.classList.add('content');
                contentElement.innerHTML = addLineBreaks(task.content, 70);

                let deleteIcon = document.createElement('img');
                deleteIcon.classList.add('deleteTaskIcon');
                deleteIcon.src = '../IMAGES/ICONS/trashCan.png';
                deleteIcon.addEventListener('click', function() {
                    deleteTask(index);
                });

                let renameIcon = document.createElement('img');
                renameIcon.classList.add('renameTaskIcon');
                renameIcon.src = '../IMAGES/ICONS/remake.png';

                renameIcon.addEventListener('click', function() {
                    currentTaskIndex = index;
                    console.log(task.title);
                    console.log(task.content);
                    createTaskDiv.style.display = 'block';
                    newTaskTitleInput.value = task.title;
                    newTaskContentText.value = task.content;
                });

                taskContainer.appendChild(titleElement);
                taskContainer.appendChild(contentElement);
                taskContainer.appendChild(renameIcon);
                taskContainer.appendChild(deleteIcon);
                showedTasks.appendChild(taskContainer);
            });
        }

        function deleteTask(index) {
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.splice(index, 1); // Remove the task at the specified index
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Update local storage
            loadTasksFromLocalStorage(); // Reload tasks to reflect changes
        }

        function createNewTask() {
            const taskContentText = newTaskContentText.value;
            const taskTitleInput = newTaskTitleInput.value;
            errorText5.style.display = 'none';

            if (taskTitleInput.length > 0) {
                let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

                if (currentTaskIndex >= 0 && currentTaskIndex < tasks.length) {
                    tasks[currentTaskIndex].title = taskTitleInput;
                    tasks[currentTaskIndex].content = taskContentText;
                    currentTaskIndex = -1;
                    console.log(currentTaskIndex);
                } else {
                    tasks.push({ title: taskTitleInput, content: taskContentText });
                }

                localStorage.setItem('tasks', JSON.stringify(tasks));

                loadTasksFromLocalStorage();

                newTaskTitleInput.value = '';
                newTaskContentText.value = '';
                createTaskDiv.style.display = 'none';
            } else {
                errorText5.style.display = 'block';
            }
        }

        if (settings) {
            const settingsStyle = window.getComputedStyle(settings);

            settingsIcon.addEventListener('click', toggleSettings);
            settingsMainLogo.addEventListener('click', toggleSettings);

            function toggleSettings() {
                settings.style.display = (settingsStyle.display === 'none') ? 'block' : 'none';
            }
        }

        if (profileMainDiv) {
            const profileMainDivStyle = window.getComputedStyle(profileMainDiv);

            mainProfileIcon.addEventListener('click', toggleProfileVisibility);
            profileIcon.addEventListener('click', toggleProfileVisibility);

            function toggleProfileVisibility() {
                profileMainDiv.style.dispylay = (profileMainDivStyle.display === 'none') ? 'block' : 'none';
            }
        }


    } else if (window.location.href.includes("calendar.html")) {
        // CALENDAR PAGE
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth'
        });
        calendar.render();
    }
});

function addLineBreaks(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }

    let result = '';
    for (let i = 0; i < text.length; i += maxLength) {
        result += text.slice(i, i + maxLength) + '<br>';
    }
    return result.slice(0, -4);
}

// localStorage.clear();
