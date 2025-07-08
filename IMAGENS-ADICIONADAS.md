# Imagens Adicionadas ao Site

## Imagens dos Locais

Foram adicionadas as seguintes imagens placeholder na pasta `images/`:

### Cerimônia
- `capela-santa-catarina.jpg` - Foto da Capela Santa Catarina de Alexandria
- Esta imagem aparece na seção "Detalhes do Evento" no card da cerimônia

### Recepção
- `restaurante-gute-kuche.jpg` - Foto do Restaurante Gute Küche
- Esta imagem aparece na seção "Detalhes do Evento" no card da recepção

## Logos das Lojas

### Amazon
- `amazon-logo.png` - Logo da Amazon
- Esta imagem aparece na seção "Lista de Presentes" no card da Amazon

### Mercado Livre
- `mercado-livre-logo.png` - Logo do Mercado Livre
- Esta imagem aparece na seção "Lista de Presentes" no card do Mercado Livre

## Como Substituir as Imagens

Para substituir as imagens placeholder pelas imagens reais:

1. **Locais**: Substitua os arquivos `capela-santa-catarina.jpg` e `restaurante-gute-kuche.jpg` por fotos reais dos locais
   - Recomenda-se usar imagens com proporção 16:9 ou similar
   - Resolução recomendada: 800x600px ou superior

2. **Logos**: Substitua os arquivos `amazon-logo.png` e `mercado-livre-logo.png` pelas logos oficiais
   - Use imagens PNG com fundo transparente
   - Dimensões recomendadas: 200x100px (máximo)

## Estilos CSS Adicionados

### Para as imagens dos locais:
```css
.evento-image {
    margin-bottom: 1.5rem;
}

.evento-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

### Para as logos dos presentes:
```css
.presente-logo {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
}

.presente-logo img {
    max-width: 120px;
    max-height: 60px;
    object-fit: contain;
}
```

As imagens foram integradas ao design existente e são responsivas, adaptando-se a diferentes tamanhos de tela.
