# **PlayWright Mentoring**

## **Objetivos**

Exercitar automação de testes com Playwright e TypeScript, bem como Integração Contínua utilizando GitHub.
Durante o processo, iremos trabalhar de ponta a ponta no processo de escrita de testes, aprimorando linguagem e métodos, integrando com GitHub para atender às boas práticas.

---

## **Conceitos Observados**

- **Design Pattern**
- **Page Objects**
- **Modelo de Branch**: Estratégia de versionamento de código que permite criar cópias separadas para realizar alterações sem afetar a versão principal.

---

## **Tecnologias**

- **Node.js**: Biblioteca que contém os recursos necessários para execução do projeto.
- **NPM**: Ferramenta para buscar e organizar pacotes no Node.
  - _"Node é a biblioteca e o NPM é o bibliotecário."_
- **Playwright**: Framework para automação de testes que suporta navegadores modernos e múltiplas linguagens de programação.
  - Atualmente estamos utilizando a versão **1.48.2**.

---

## **Como Configurar o Projeto**

### 1. Configuração Inicial

Após clonar o projeto, instale as dependências necessárias executando:

```bash
npm install
```

Em seguida, instale os navegadores suportados pelo Playwright:

```bash
npx playwright install
```

---

## **Estrutura do Projeto**

### **Pastas e Arquivos Principais**

- **`consts/`**: Contém arquivos como `users.ts` para armazenar dados constantes usados nos testes. Futuramente, será utilizada para centralizar os dados de entrada dos testes.
- **`pages/`**: Contém os Page Objects referentes a cada página automatizada. Segue o padrão de separação por funcionalidades para facilitar a manutenção.
- **`types/`**: Armazena os tipos utilizados no projeto, ajudando a melhorar a tipagem e validação com TypeScript.
- **`e2e/`**: Contém os arquivos de testes automatizados (`.spec.ts`) para cada funcionalidade implementada.

### **Browsers Suportados**

O Playwright suporta os seguintes navegadores, que são utilizados nos testes:

- **Chromium**: Base para o Google Chrome e o Microsoft Edge. É rápido e amplamente utilizado.
- **Firefox**: Conhecido por sua ênfase em segurança e privacidade.
- **WebKit**: Base para o Safari, permite testar comportamentos exclusivos da engine da Apple.

Esses navegadores garantem uma ampla cobertura para validar as funcionalidades em diferentes plataformas.

### **Integração Contínua**

O projeto utiliza **GitHub Actions** para executar os testes automaticamente na pipeline. Isso garante que cada mudança seja validada antes de ser integrada ao branch principal.

---

## **Comandos Úteis para o Playwright**

### Para Executar Testes:

```bash
npx playwright test                 # Executa todos os testes
npx playwright test --ui            # Abre a interface gráfica de testes
npx playwright test <nome-do-teste> # Executa um teste específico
```

### Para Gerar Código Automático:

```bash
npx playwright codegen <url>        # Abre o Codegen para gravação de interações
```

### Para Atualizar os Browsers do Playwright:

```bash
npx playwright install              # Atualiza os navegadores suportados
```

### Para Limpar e Reexecutar Testes:

```bash
npx playwright test --trace on      # Habilita rastreamento completo para depuração
```

### Para Gerar Relatórios:

```bash
npx playwright show-report          # Abre o relatório de testes executados
npx playwright generate-report      # Gera um relatório em HTML
```

---

## **Página Objeto de Teste**

A página utilizada para os testes é a [Playground](https://playground-drab-six.vercel.app/), uma aplicação desenvolvida pela **Bug Buster Mentoria** para auxiliar no treinamento de automação de testes.

**Imagem do Projeto:**

![Imagem do Projeto](https://res.cloudinary.com/dtglidvcw/image/upload/v1722117148/BUGBUSTER/oxppkv2auqy48lj5vbjn.png)

---

## **Tarefas**

- [x] Instalação do Playwright e primeiros passos
- [x] Automação do Login
- [x] Adequação ao modelo de Page Objects
- [x] Revisão de mensagens e refatoração
- [ ] Automação da Home Page
- [ ] Automação do Menu
- [ ] Automação do Formulário
- [ ] Automação de Tasks
- [ ] Automação da Página Sobre

---

## **Considerações**

### Lições e Práticas em Colaboração:

- **11/11/2024**:
  - Instalação e configuração inicial do Playwright.
- **20/11/2024**:
  - Melhorias no código de automação com Playwright utilizando Page Objects.
- **04/12/2024**:
  - Aprofundamento de testes, estrutura de constantes, testes dinâmicos, GitHub Actions pipeline.
- **19/12/2024**:
  - Code review dos testes de Login e proposta de um teste mais dinâmico utilizando for e arrays.

---

## **Funcionalidades Implementadas**

- [x] Escrita inicial do README
- [x] Integração com CI/CD
- [x] Automação do Login
- [ ] Automação da Home Page
- [ ] Automação do Menu
- [ ] Automação do Formulário
- [ ] Automação de Tasks
- [ ] Automação da Página Sobre

_As aulas foram ministradas através do site [Bug Buster Mentoria](https://brunomachadors.github.io/bugbuster/)._
