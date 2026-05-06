# 🐾 PetMatch 
Plataforma de adoção de animais desenvolvida em **HTML, CSS e JavaScript puro** (sem frameworks).

## 📋 Estrutura do Projeto

```
PetMatch-VanillaJS/
├── index.html          # Estrutura HTML (33%)
├── css/
│   └── styles.css      # Estilos CSS (33%)
├── js/
│   └── app.js          # Lógica JavaScript (33%)
└── README.md           # Este arquivo
```

## 🎯 Funcionalidades

### ✅ Página Inicial
- Hero banner com imagem
- Carrossel automático de histórias de sucesso
- Seção de depoimentos com indicadores
- Estatísticas: Adotados, Disponíveis, Famílias Felizes
- CTA para explorar pets

### ✅ Página de Pets
- Grid responsivo com 8 animais
- Busca por nome, raça ou localização
- Filtro por tipo (Cão, Gato, Coelho, Pássaro)
- Cards interativos com hover effects
- Modal de detalhes do pet

### ✅ Autenticação
- Modal de login/cadastro
- Seleção de tipo de usuário (Adotador/Organização)
- Persistência em localStorage
- Logout funcional

### ✅ Design
- Paleta azul (#0066CC) e verde (#2BA84A)
- Tipografia Poppins + Inter
- Responsivo mobile-first
- Animações suaves
- Acessibilidade

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador
1. Abra o arquivo `index.html` no seu navegador
2. Pronto! O site está funcionando

### Opção 2: Usar um Servidor Local (Recomendado)

#### Com Python 3:
```bash
cd PetMatch-VanillaJS
python -m http.server 8000
# Acesse: http://localhost:8000
```

#### Com Node.js (http-server):
```bash
npm install -g http-server
cd PetMatch-VanillaJS
http-server
# Acesse: http://localhost:8080
```

#### Com VSCode (Live Server):
1. Instale a extensão "Live Server" no VSCode
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## 📊 Distribuição de Código

### HTML (33%)
- Estrutura semântica com tags HTML5
- Formulários interativos
- Modais e componentes
- Acessibilidade ARIA

### CSS (33%)
- Variáveis CSS para cores
- Grid e Flexbox layout
- Animações e transições
- Media queries responsivas
- Design tokens

### JavaScript (33%)
- Gerenciamento de estado
- Manipulação do DOM
- Event listeners
- Filtros e busca
- Persistência com localStorage
- Lógica de carousel e testimonials

## 🎨 Paleta de Cores

```
Primário:     #0066CC (Azul)
Secundário:   #2BA84A (Verde)
Accent:       #00A8E8 (Azul Claro)
Background:   #FFFFFF (Branco)
Foreground:   #003D99 (Azul Escuro)
Card BG:      #F0F7FF (Azul Muito Claro)
Border:       #D4E6F7 (Azul Claro)
Text Muted:   #6B7280 (Cinza)
```

## 🔧 Dados Mockados

Os pets são armazenados em um array no `app.js`:

```javascript
const pets = [
    {
        id: 1,
        name: 'Max',
        type: 'dog',
        breed: 'Golden Retriever',
        age: '2 anos',
        location: 'Curitiba, PR',
        image: 'https://via.placeholder.com/300x300',
        description: '...'
    },
    // ... mais pets
];
```

Para adicionar novos pets, edite o array em `js/app.js`.

## 💾 LocalStorage

O projeto usa localStorage para:
- Armazenar dados de usuário logado
- Persistência entre sessões

```javascript
// Salvar usuário
localStorage.setItem('currentUser', JSON.stringify(user));

// Recuperar usuário
const user = JSON.parse(localStorage.getItem('currentUser'));
```

## 🎯 Próximos Passos

1. **Integrar com API**: Conectar com backend para dados dinâmicos
2. **Adicionar mais pets**: Expandir banco de dados
3. **Formulário de contato**: Página de contato funcional
4. **Sistema de favoritos**: Salvar pets favoritos
5. **Notificações**: Alertas de novos pets

## 🐛 Troubleshooting

### "CORS error" ao abrir arquivo local
- Use um servidor local (veja "Como Usar")

### Imagens não carregam
- As imagens usam placeholder.com
- Substitua as URLs por imagens reais

### localStorage não funciona
- Verifique se o navegador permite localStorage
- Tente em modo normal (não incógnito)

## 📱 Responsividade

O projeto é totalmente responsivo:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ Recursos Especiais

- ⚡ Sem dependências externas
- 🎯 Carregamento rápido
- ♿ Acessível (WCAG)
- 📱 Mobile-first
- 🎨 Design moderno
- 🔒 Seguro (sem dados sensíveis)

## 📄 Licença

Projeto educacional - TCC 3DDS

## 👨‍💻 Desenvolvido por

PetMatch Team - 2026

---

**Desenvolvido com ❤️ em HTML, CSS e JavaScript Puro**
