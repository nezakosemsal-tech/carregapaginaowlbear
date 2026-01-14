# Carregador de Página - Extensão OWLBear 2.0

Uma extensão simples e funcional para o OWLBear 2.0 que permite carregar sites do GitHub Pages diretamente na sua mesa de jogo.

## 📋 Características

- ✅ Interface limpa e intuitiva
- ✅ Carrega URLs de sites
- ✅ Pré-configurado com site padrão do GitHub Pages
- ✅ Suporta URLs customizadas
- ✅ Design responsivo e moderno
- ✅ Integração com OWLBear 2.0

## 📦 Arquivos da Extensão

```
owlbearextensaodecarregarsite/
├── manifest.json      # Configuração da extensão
├── index.html         # Interface do usuário
├── extension.js       # Lógica da extensão
└── README.md          # Este arquivo
```

## 🚀 Como Usar

### 1. Instalação
- Copie a pasta `owlbearextensaodecarregarsite` para o diretório de extensões do OWLBear
- Reinicie o OWLBear
- A extensão aparecerá no menu de extensões

### 2. Uso
1. Clique no botão da extensão no OWLBear
2. Escolha uma das opções:
   - **Carregar Site Padrão**: Carrega automaticamente o site do GitHub Pages
   - **URL Customizada**: Cole qualquer URL e clique em "Carregar"

### 3. URL Padrão
A extensão vem pré-configurada para carregar:
```
https://nezakosemsal-tech.github.io/carregapaginaowlbear/
```

## 🔧 Configuração

### manifest.json
Edite este arquivo para personalizar:
- `name`: Nome da extensão
- `description`: Descrição
- `version`: Versão
- `author`: Seu nome
- `popupWidth` / `popupHeight`: Tamanho da janela popup

## 📝 Exemplo de Uso

```javascript
// Carregar um site
window.loadWebsiteContent("https://seu-site.com");

// Enviar mensagem para OWLBear
window.OWL.sendMessage({
    type: "LOAD_SITE",
    url: "https://seu-site.com"
});
```

## 🌐 Sites Testados

- ✅ GitHub Pages
- ✅ Sites HTML estáticos
- ✅ Aplicações web responsivas

## ⚠️ Limitações

- A URL deve ter CORS habilitado (para isso funcionar em iframes)
- Alguns sites podem ter restrições de segurança que impedem carregamento em iframes

## 🛠️ Desenvolvimento

Para adicionar novas funcionalidades:

1. Edite `index.html` para modificar a interface
2. Edite `extension.js` para adicionar lógica
3. Atualize a versão em `manifest.json`

## 📞 Suporte

Se encontrar problemas:
1. Verifique se a URL tem CORS habilitado
2. Verifique o console do navegador para erros
3. Certifique-se de que o OWLBear 2.0 está atualizado

## 📄 Licença

Livre para uso e modificação.

---

Desenvolvido para OWLBear 2.0
