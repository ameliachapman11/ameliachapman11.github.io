// Landing page - first time name is clicked, show the introduction and disable further clicks on the name
document.getElementById('name').addEventListener('click', function() {
    document.getElementById('intro').style.display = 'block';
    this.style.cursor = 'default'; 
    this.removeEventListener('click', arguments.callee); 
});