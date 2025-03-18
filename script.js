function selectTab(button) {
    // Eliminar la clase 'selected' de todos los botones
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach((btn) => btn.classList.remove('selected'));
  
    // Añadir la clase 'selected' al botón que se ha clicado
    button.classList.add('selected');
}

function showSkills(category) {
    const allSkills = document.querySelectorAll('.skill-list');
    allSkills.forEach(skill => skill.style.display = 'none');
    document.getElementById(category).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const defaultTab = document.getElementById('softwareTab'); // ID del botón de Software
    selectTab(defaultTab); // Seleccionamos el botón de Software
    showSkills('software'); // Mostramos la sección de Software
});