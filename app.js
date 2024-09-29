var buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function () {
        var command = button.dataset["element"]
        // console.log(command);
        if (command == "createLink" || command == "insertImage") {
            var url = prompt('Enter link here:', "https://");
            document.execCommand(command, true, url)
        } else if (command == "hiliteColor" || command == "foreColor") {
            var color = prompt('Enter color:', '#FFFF00');
            document.execCommand(command, true, color)
        } else if (command == "fontSize") {
            var size = prompt('Enter font size:', '12');
            document.execCommand(command, true, size)
        } else {
            document.execCommand(command, false, null);
        }
    })
})

function fillPage(color) {
    var content = document.getElementById('content');
    content.style.backgroundColor = color;
}