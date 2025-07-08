# Configurações do Site - Carolina & Thiago

## 🔧 Checklist de Configuração

### 1. ✅ Informações Básicas
- [ ] Alterar data do casamento (atualmente: 07/12/2025)
- [ ] Atualizar horários (cerimônia: 16h, recepção: 18h)
- [ ] Confirmar nomes dos locais
- [ ] Verificar endereços completos
- [ ] Testar links do Google Maps

### 2. 📧 Formulário RSVP
- [ ] Criar conta no Formspree.io
- [ ] Configurar formulário
- [ ] Substituir "YOUR_FORM_ID" no HTML
- [ ] Testar envio de formulário
- [ ] Configurar notificações de e-mail

### 3. 🎁 Lista de Presentes
- [ ] Criar lista na Amazon
- [ ] Criar lista no Mercado Livre
- [ ] Atualizar links no HTML
- [ ] Configurar links de pagamento do banco
- [ ] Gerar QR Code do PIX
- [ ] Verificar chave PIX

### 4. 🖼️ Imagens
- [ ] Foto principal para hero section (1920x1080px)
- [ ] QR Code do PIX (PNG)
- [ ] Fotos do casal para galeria (mínimo 6 fotos)
- [ ] Otimizar imagens para web

### 5. 📱 Testes
- [ ] Testar no celular
- [ ] Testar no tablet
- [ ] Testar no desktop
- [ ] Verificar formulário
- [ ] Testar countdown
- [ ] Verificar navegação

## 📝 Informações para Personalizar

### Dados do Evento:
```
Cerimônia:
- Data: 07 de Dezembro de 2025
- Horário: 16:00h
- Local: Igreja São Francisco
- Endereço: Rua das Flores, 123 - Centro, São Paulo, SP
- Google Maps: [LINK_PARA_GOOGLE_MAPS]

Recepção:
- Data: 07 de Dezembro de 2025
- Horário: 18:00h
- Local: Salão Villa Jardim
- Endereço: Av. das Palmeiras, 456 - Jardins, São Paulo, SP
- Google Maps: [LINK_PARA_GOOGLE_MAPS]
```

### Links de Presentes:
```
Amazon: [SEU_LINK_AMAZON]
Mercado Livre: [SEU_LINK_MERCADO_LIVRE]

Pagamentos:
- R$ 50: [LINK_PAGAMENTO_50]
- R$ 100: [LINK_PAGAMENTO_100]
- R$ 200: [LINK_PAGAMENTO_200]
- R$ 500: [LINK_PAGAMENTO_500]

PIX: [SUA_CHAVE_PIX]
```

### Formspree Configuration:
```
1. Acesse: https://formspree.io
2. Crie conta gratuita
3. Crie novo formulário
4. Copie o endpoint
5. Substitua em index.html linha 115
```

### Countdown Timer:
```javascript
// No arquivo script.js, linha 37
const weddingDate = new Date('2025-12-07T16:00:00').getTime();
```

## 🎨 Customizações Opcionais

### Cores Alternativas:
Se quiser mudar as cores, edite no arquivo `style.css`:
```css
:root {
    --primary-color: #eae4d8;    /* Bege claro */
    --secondary-color: #a38e6d;  /* Marrom dourado */
    --text-color: #3b5a00;       /* Verde escuro */
}
```

### Valores de Presente:
Altere os valores no `index.html` nas linhas 250-265:
```html
<span class="valor">R$ 50</span>
<span class="valor">R$ 100</span>
<span class="valor">R$ 200</span>
<span class="valor">R$ 500</span>
```

### Textos da História:
Personalize a seção "Nossa História" no `index.html` a partir da linha 320.

## 🚀 Passos para Publicar

1. **Hospedagem Gratuita:**
   - Netlify.com
   - Vercel.com
   - GitHub Pages

2. **Domínio Personalizado:**
   - Registro.br
   - GoDaddy
   - Namecheap

3. **SSL/HTTPS:**
   - Automático na maioria dos serviços

## 📊 Analytics (Opcional)

Para acompanhar visitantes:
1. Crie conta no Google Analytics
2. Adicione o código de tracking no HTML
3. Configure eventos personalizados

## 🔒 Backup

Sempre mantenha backup de:
- Arquivos do site
- Configurações do formulário
- Dados recebidos via RSVP
- Imagens originais

---

**Última atualização: Julho 2025**
