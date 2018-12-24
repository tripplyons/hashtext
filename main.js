var h = window.location.hash ? window.location.hash.substr(1) : ""
t.value = (
    atob(
        h
    )//.split('<').join('&lt;').split('>').join('&gt').split('\n').join('<br>')
)
t.addEventListener('change', function(e) {
    window.location.hash = '#'+btoa(t.value)
    selflink.href = window.location.href
})
