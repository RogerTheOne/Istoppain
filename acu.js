document.getElementById('acu-toggle-view').addEventListener('click', function() {
    var content = document.getElementById('acu-hidden-content');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});