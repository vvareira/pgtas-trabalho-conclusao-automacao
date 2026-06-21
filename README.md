# Criação da Pipeline

## Disparos

A pipeline foi configurada com os seguintes gatilhos de execução:

* **Manual**: permite a execução sob demanda, diretamente pela interface do GitHub Actions.
* **Agendada**: execução automática de **segunda a sexta-feira às 8h**.
* **Por push**: execução automática a cada envio de código para o repositório.

---

## Execução

A pipeline é executada em uma máquina com versão fixa do sistema operacional:

* **`ubuntu-22.04`**

Essa definição segue boas práticas de CI/CD, pois evita comportamentos inesperados causados por mudanças em versões mais genéricas, como `ubuntu-latest`.

---

## Jobs

### `unit-tests`

O job **`unit-tests`** é responsável pela execução dos testes unitários do projeto.

Os testes unitários são executados primeiro na pipeline porque possuem menor tempo de execução e fornecem **feedback rápido** sobre a qualidade do código, permitindo identificar falhas logo nas primeiras etapas da integração contínua.

Atualmente, o projeto possui apenas testes unitários. Em uma futura evolução da pipeline, poderiam ser adicionados novos jobs para outros níveis de validação, como:

* **testes de contrato**
* **testes funcionais**
* **testes end-to-end**

---

## Relatórios

A pipeline gera e publica os seguintes relatórios:

* **Relatório de execução dos testes**
  Exibe o resultado da execução dos testes unitários, indicando testes aprovados e falhados.

* **Relatório de cobertura de código**
  Apresenta a porcentagem do código-fonte coberta pelos testes automatizados, auxiliando na análise da qualidade da suíte de testes.
