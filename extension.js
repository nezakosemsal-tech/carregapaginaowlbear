// OWLBear Extension: Carregador de Página
// Versão 1.0.0

(function() {
    'use strict';

    // Registra a extensão
    const extension = {
        name: "Carregador de Página",
        version: "1.0.0"
    };

    // API de comunicação com OWLBear
    window.OWL = window.OWL || {
        sendMessage: function(message) {
            console.log("[OWL Extension]", message);
            return this;
        },
        
        onMessage: function(callback) {
            window.addEventListener('message', function(event) {
                if (event.data && event.data.type) {
                    callback(event.data);
                }
            });
            return this;
        },

        loadContent: function(url) {
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            iframe.style.borderRadius = '8px';
            
            document.body.appendChild(iframe);
            return iframe;
        }
    };

    // Função para buscar e carregar o site
    window.loadWebsiteContent = function(url) {
        try {
            // Valida a URL
            new URL(url);
            
            console.log("Carregando site:", url);
            
            // Cria um iframe para carregar o conteúdo
            const container = document.getElementById('content-container') || document.body;
            const iframe = window.OWL.loadContent(url);
            
            return {
                success: true,
                message: "Site carregado com sucesso",
                url: url,
                element: iframe
            };
        } catch (error) {
            console.error("Erro ao carregar site:", error);
            return {
                success: false,
                message: "Erro: URL inválida ou inacessível",
                error: error.message
            };
        }
    };

    console.log("Extensão OWLBear Carregador de Página iniciada!");
})();
