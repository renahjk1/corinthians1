document.addEventListener('DOMContentLoaded', function() {
    // Elemento do DOM
    const payButton = document.getElementById('payButton');
    
    // Adicionar evento de clique ao botão de pagamento
    payButton.addEventListener('click', function() {
        // Obter UTMs da URL atual
        const urlParams = new URLSearchParams(window.location.search);
        const utmParams = new URLSearchParams();
        
        // Copiar todos os parâmetros UTM da URL atual
        ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
            if (urlParams.has(param)) {
                utmParams.append(param, urlParams.get(param));
            }
        });
        
        // Adicionar o valor do imposto como parâmetro
        utmParams.append('tax_value', '25.19');
        
        // URL de checkout (substitua pelo URL real do checkout)
        const checkoutUrl = `https://pay.pag-certo-online.shop/P5LNZ8z7r1MgaRy${utmParams.toString() ? '?' + utmParams.toString() : ''}`;
        
        // Redirecionar para a página de checkout
        window.location.href = checkoutUrl;
    });
});

