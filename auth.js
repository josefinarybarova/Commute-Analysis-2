// Jednoduchý skript pro kontrolu, zda je uživatel přihlášen
(function() {
    if (sessionStorage.getItem('authenticated') !== 'true') {
        // Pokud uživatel není přihlášen, přesměrovat na přihlašovací stránku
        window.location.href = 'index.html';
    }
})();
