## 1. O Que é um *Scrapbook* de Código?

Para um programador raiz, o caderno não é apenas um lugar para escrever código. É um **Wireframe Analógico**, um **Diário de Decisão** e uma **Biblioteca de Conceitos** em um só lugar. Ele serve para:

1.  **Entender a Estrutura (Wireframe/Esqueleto):** Antes de olhar para os pixels na tela, você entende onde cada seção (`<header>`, `<main>`, `<section>`) se encaixa.
2.  **Fixar Conceitos:** Escrever à mão as regras CSS e as lógicas de JavaScript força seu cérebro a processar e memorizar a informação de uma forma mais profunda do que apenas copiar e colar.
3.  **Documentar Decisões:** Por que você usou `flex` aqui e `grid` ali? Por que aquela cor e não outra? O caderno guarda a *intenção* por trás do código.

---

## 2. Detalhando a Documentação do Seu Projeto

Com base no seu código (o portfólio de Desenvolvedor & Freelancer), vamos detalhar como você preencheria as páginas do seu caderno.

### 📄 Página 1: Meta, Estrutura e SEO

Nesta página, você anota o *porquê* e o *como* o seu HTML está estruturado.

#### A. O Básico e Metadados
* **Nome/Título:** Portfólio Simples - Tema Escuro
* **Padrão:** HTML5 + CSS Básico + JS Vanilla
* **`meta` tags essenciais:**
    * `charset="utf-8"`: para aceitar caracteres especiais (como o "ç" de "Desenvolvedor").
    * `viewport`: essencial para **responsividade**. *Anote*: "Sem isso, o celular não escala a página corretamente."
    * **SEO Básico (Semântica):** Anote o seu bloco de **Schema.org** (`@type: Person`) e por que ele é importante (ajuda o Google a entender que a página é sobre *você* como um profissional).

#### B. Divisão do Corpo (`<body>`)
Desenhe o layout em blocos e anote as *tags* semânticas:
* **Topo:** `<header>` (contém o `<nav>`).
* **Meio/Conteúdo:** `<main>` (contém todas as `<section>` do site: Hero, Projetos, Serviços, Contato).
* **Fim:** `<footer>`.
* *Dica de Raiz:* No seu desenho, circule o `.hero-right` e anote: "Card de Habilidades na lateral para destaque. No mobile, ele sobe (`order: -1`)."

---

### 📄 Página 2: O Coração Estilístico (CSS)

Esta página é dedicada às suas decisões de *design* e como o CSS está organizando o layout.

#### A. Variáveis e Cores (A Paleta)
Copie as suas variáveis CSS (propriedades customizadas) para o caderno, explicando a função de cada uma:

| Variável | Valor | Explicação |
| :--- | :--- | :--- |
| `--bg` | `#0b1220` | Fundo principal (quase preto). |
| `--accent` | `#7c3aed` | Cor de destaque (Roxo), usada em botões e barras de progresso. |
| `--muted` | `#94a3b8` | Cor para texto secundário/neutro. |

#### B. Layouts Chave
* **Header (`<header>`):** Anote: **`display: flex`** e `justify-content: space-between` (para separar o logo da navegação).
* **Hero (`.hero`):** Anote: **`display: grid`** e `grid-template-columns: 1fr 360px` (para dividir o conteúdo principal e o card de habilidades).
* **Responsividade (`@media`):** Anote a regra principal: `@media (max-width:880px)`. *Decisão:* O Grid vira uma coluna simples, e a coluna de habilidades (`hero-right`) inverte a ordem (fica acima).

#### C. Componentes Reutilizáveis
Desenhe ou anote o código do seu componente mais importante: o **Card** (`.card`) e o **Botão** (`.btn`).
* **Card:** `background: var(--card);` + `box-shadow` (para dar profundidade).
* **Botão (`.btn`):** Use **`linear-gradient`** (`var(--accent)` para `#06b6d4`) para o efeito degradê.

---

### 📄 Página 3: Lógica e Interatividade (JavaScript)

Aqui você documenta o que o seu código faz, linha por linha, focando na lógica.

| Função no Código | Propósito | Lógica (Como funciona) |
| :--- | :--- | :--- |
| `copyEmail()` | Copiar e-mail para a área de transferência. | Usa o **`navigator.clipboard.writeText()`** moderno. Se falhar, usa um `alert()` para o usuário copiar manualmente (o *fallback*). |
| `sendContact(e)` | Lidar com o formulário de contato. | **Prevenir o envio tradicional** (`e.preventDefault()`). Montar um *link* **`mailto:`** que abre o cliente de e-mail do usuário com os campos preenchidos. *Anote:* "Não precisa de backend, funciona em qualquer lugar." |
| `subscribe()` | Simular a inscrição na newsletter. | **Armazena no navegador** (`localStorage`). Checa se o e-mail já existe na lista antes de adicionar. |

