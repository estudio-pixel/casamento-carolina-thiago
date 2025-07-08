# Site de Casamento - Carolina & Thiago

Um site de casamento elegante e responsivo com design clássico e funcionalidades modernas.

## 🎨 Características

- **Design Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- **Navegação Suave**: Menu fixo com scroll suave entre seções
- **Countdown Timer**: Contador regressivo até o dia do casamento
- **Formulário RSVP**: Confirmação de presença integrada
- **Galeria de Fotos**: Galeria interativa com modal
- **Lista de Presentes**: Links para Amazon e Mercado Livre + opções de PIX
- **Cores Personalizadas**: Paleta de cores conforme solicitado (#eae4d8, #a38e6d, #3b5a00)

## 📁 Estrutura do Projeto

```
casamento-carolina-thiago/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # JavaScript
├── README.md           # Este arquivo
└── images/             # Pasta para imagens (criar)
    ├── hero-bg.jpg     # Imagem de fundo da hero section
    ├── qr-code-pix.png # QR Code do PIX
    └── fotos/          # Fotos do casal para galeria
```

## 🔧 Configuração

### 1. Configurar Formulário RSVP

O formulário está configurado para usar o **Formspree** (gratuito). Para ativar:

1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Copie o endpoint fornecido
5. No arquivo `index.html`, substitua `YOUR_FORM_ID` na linha 115:

```html
<form class="rsvp-form" action="https://formspree.io/f/SEU_FORM_ID" method="POST">
```

### 2. Adicionar Imagens

1. Crie uma pasta `images` na raiz do projeto
2. Adicione as seguintes imagens:
   - `hero-bg.jpg` - Imagem de fundo da hero section (recomendado: 1920x1080px)
   - `qr-code-pix.png` - QR Code do PIX
   - Fotos do casal na pasta `images/fotos/`

3. Atualize os caminhos no HTML:
   - Linha 74: substitua a URL da imagem de fundo
   - Linha 285: substitua o caminho do QR Code
   - Seção galeria: substitua as URLs placeholder pelas suas fotos

### 3. Personalizar Informações

#### Dados do Evento:
- **Data**: 07 de Dezembro de 2025 (altere no HTML e JavaScript)
- **Locais**: Atualize endereços e links do Google Maps
- **Chave PIX**: Substitua `carolina.thiago@email.com` pela sua chave real

#### Links de Presentes:
- **Amazon**: Substitua `#` pelo link da sua lista
- **Mercado Livre**: Substitua `#` pelo link da sua lista
- **Pagamentos**: Substitua `#` pelos links do seu banco

### 4. Instalar Fonte Personalizada

Para usar a fonte "Lovely Day Personal Use":

1. Baixe o arquivo da fonte
2. Crie uma pasta `fonts` na raiz do projeto
3. Adicione os arquivos da fonte (.woff2, .woff)
4. A fonte já está configurada no CSS

## 💰 Valores Sugeridos para Presentes

Os valores configurados são:
- R$ 50
- R$ 100
- R$ 200
- R$ 500

Você pode alterar esses valores no arquivo `index.html` nas linhas 250-265.

## 📱 Responsividade

O site é totalmente responsivo e funciona bem em:
- Smartphones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Telas grandes (1200px+)

## 🎯 Funcionalidades Implementadas

### ✅ Seções Incluídas:
- [x] Hero Section com countdown
- [x] Detalhes do Evento (cerimônia e recepção)
- [x] Dress Code (casual elegante)
- [x] Formulário RSVP
- [x] Lista de Presentes (Amazon + Mercado Livre)
- [x] Opções de PIX e valores fixos
- [x] Galeria de Fotos
- [x] Nossa História
- [x] Header com navegação
- [x] Footer

### ✅ Funcionalidades JavaScript:
- [x] Menu mobile responsivo
- [x] Scroll suave entre seções
- [x] Countdown timer
- [x] Validação de formulário
- [x] Cópia de chave PIX
- [x] Modal para galeria
- [x] Animações on scroll
- [x] Efeitos de hover

## 🎨 Paleta de Cores

```css
--primary-color: #eae4d8   /* Bege claro */
--secondary-color: #a38e6d /* Marrom dourado */
--text-color: #3b5a00      /* Verde escuro */
--white: #ffffff           /* Branco */
--light-gray: #f8f8f8      /* Cinza claro */
```

## 🔤 Fontes

- **Nomes**: Lovely Day Personal Use (cursiva)
- **Texto**: Candara Light (sans-serif)
- **Fallback**: Sistema padrão

## 🚀 Como Usar

1. **Hospedagem**: Faça upload dos arquivos para qualquer serviço de hospedagem web
2. **Domínio**: Configure um domínio personalizado (ex: carolinathiago.com)
3. **HTTPS**: Certifique-se de que o site use HTTPS
4. **Teste**: Teste todas as funcionalidades antes do lançamento

## 📧 Configuração de E-mail

Para receber as confirmações de presença:

1. Configure o Formspree com seu e-mail
2. Teste o formulário
3. Configure notificações automáticas
4. Exporte os dados quando necessário

## 🎉 Dicas Finais

- Teste o site em diferentes dispositivos
- Otimize as imagens para carregamento rápido
- Configure Google Analytics se desejar estatísticas
- Faça backup dos dados do formulário
- Compartilhe o link nas redes sociais

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se todos os arquivos estão no lugar correto
2. Teste o formulário antes do evento
3. Mantenha backup de todas as configurações

---

**Desenvolvido com 💕 para Carolina & Thiago**
