document.addEventListener("DOMContentLoaded", function() {
    showContent('add-day');
});

function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}