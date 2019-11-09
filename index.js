
// Close the sidebar when user clicks outside it
document.addEventListener('click', function (ev) {
    const target = ev.target
    const sidebar = document.getElementById('sidebar')
    const in_sidebar = document.getElementById('in-sidebar-floating')

    // If the checkbox to open the sidebar was clicked, do nothing
    if (target === in_sidebar) return

    // If the target wasent the sidebar, nor anything inside the sidebar, close the sidebar
    if (target !== sidebar && !sidebar.contains(target)) {
        in_sidebar.checked = false
    }
})

// Enable the submit button when form is touched
document.getElementById('form').addEventListener('input', function (ev) {
    this.querySelector('button[type="submit"]').removeAttribute('disabled', '')
})

