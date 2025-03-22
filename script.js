document.addEventListener('DOMContentLoaded', function() {
    const newTaskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');
    const goToSettingsButton = document.getElementById('go-to-settings');

   // 获取前往下一页的button
    const goToNextPageButton = document.getElementById('go-to-next-page');

    addButton.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            newTaskInput.value = "";
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.remove();
        }
    });

    // 添加事件监听器，用于页面跳转
    if(goToSettingsButton){ //Ensure the button exists before adding listener
         goToSettingsButton.addEventListener('click', function() {
        window.location.href = 'settings.html'; // 使用 JavaScript 跳转页面
       });
    }


    // 为"前往下一页"的按钮添加事件监听器
    if(goToNextPageButton){ //Ensure the button exists before adding listener
        goToNextPageButton.addEventListener('click', function() {
            window.location.href = 'index(1).html'; // 跳转到 next_page.html
        });
    }

});
