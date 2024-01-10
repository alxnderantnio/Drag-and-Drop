const draggableElements = document.querySelectorAll('.box');
const droppableElements = document.querySelectorAll('.drop');
let score = 0;

draggableElements.forEach(element => {
    element.addEventListener('dragstart', (dragStart) => {
        dragStart.dataTransfer.setData('text', dragStart.target.id);
        dragStart.currentTarget.classList.add('draggableFormat');
    });
});

droppableElements.forEach(element => {
    element.addEventListener('drop', (dropEvent) => {
        dropEvent.preventDefault();

        const droppedElementId = dropEvent.dataTransfer.getData('text');
        const dropZoneId = dropEvent.target.getAttribute('data-draggable-id');
        const draggableElement = document.getElementById(droppedElementId);

        dropEvent.target.appendChild(document.getElementById(droppedElementId));

        if (droppedElementId === dropZoneId) {
            score += 1;
            document.getElementById('remarks').innerText = "Correct!";
            document.getElementById('scores').innerText = score;

        } else {
            document.getElementById('remarks').innerText = "Wrong";
        }
    });
    element.addEventListener('dragover', (dragOverEvent) => {
        dragOverEvent.preventDefault();
    });
});