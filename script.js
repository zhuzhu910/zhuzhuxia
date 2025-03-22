document.addEventListener('DOMContentLoaded', function() {
    const newTaskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');
    const goToNextPageButton = document.getElementById('go-to-next-page');
    const goBackButton = document.getElementById('go-back');

    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

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

    // 前往下一页
    if(goToNextPageButton){
      goToNextPageButton.addEventListener('click', function() {
          page1.classList.add('hidden');
          page2.classList.remove('hidden');
      });
    }

    // 返回上一页
     if(goBackButton){
        goBackButton.addEventListener('click', function() {
            page2.classList.add('hidden');
            page1.classList.remove('hidden');
        });
     }
});
