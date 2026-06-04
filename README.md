# 🚀 Task Manager Platform

> Sistema Full-Stack para gerenciamento de tarefas desenvolvido com **Angular 18**, **Spring Boot 3**, **JWT Authentication**, **Docker** e **Kubernetes**, seguindo princípios de **Clean Architecture**, **Domain-Driven Design (DDD)** e arquitetura baseada em microsserviços.

![Angular](https://img.shields.io/badge/Angular-18-red?logo=angular)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.1-green?logo=springboot)
![Java](https://img.shields.io/badge/Java-21-orange?logo=openjdk)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-blue?logo=kubernetes)
![JWT](https://img.shields.io/badge/Auth-JWT-purple)

---

# 📖 Visão Geral

A plataforma permite o gerenciamento completo de tarefas através de uma interface moderna e responsiva, com autenticação segura baseada em JWT.

O projeto foi desenvolvido utilizando uma arquitetura desacoplada entre frontend e backend, possibilitando escalabilidade, manutenção simplificada e implantação em ambientes cloud-native.

---

# ✨ Principais Funcionalidades

## 🔐 Autenticação e Segurança

* Cadastro de usuários
* Login com JWT
* Proteção de rotas
* Controle de sessão
* Senhas criptografadas com BCrypt
* Middleware de autenticação

## 📋 Gerenciamento de Tarefas

* Criar tarefas
* Editar tarefas
* Excluir tarefas
* Atualizar status
* Filtros por situação
* Dashboard com estatísticas

## 📊 Indicadores em Tempo Real

* Total de tarefas
* Tarefas pendentes
* Em andamento
* Concluídas

## 📱 Interface Responsiva

* Desktop
* Tablet
* Mobile

---

# 🏗️ Arquitetura da Solução

```text
┌───────────────────────┐
│      Angular 18       │
│       Frontend        │
└───────────┬───────────┘
            │ REST API
            ▼
┌───────────────────────┐
│     Auth Service      │
│     Spring Boot       │
│        JWT            │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│     Task Service      │
│     Spring Boot       │
│     CRUD Tasks        │
└───────────────────────┘
```

---

# 🛠️ Stack Tecnológica

## Frontend

| Tecnologia     | Versão     |
| -------------- | ---------- |
| Angular        | 18         |
| TypeScript     | 5.4        |
| Signals        | Native     |
| Angular Router | Latest     |
| HttpClient     | Native     |
| CSS3           | Responsive |

### Destaques

* Standalone Components
* Reactive State Management com Signals
* Route Guards
* HTTP Interceptors
* Lazy Loading

---

## Backend

| Tecnologia      | Versão |
| --------------- | ------ |
| Java            | 21     |
| Spring Boot     | 3.1.5  |
| Spring Security | Latest |
| JWT             | Latest |
| Spring Data JPA | Latest |
| H2 Database     | Latest |
| Maven           | Latest |

### Destaques

* Virtual Threads
* Clean Architecture
* JWT Authentication
* REST APIs
* Validation Layer
* Repository Pattern

---

## DevOps

| Ferramenta                |
| ------------------------- |
| Docker                    |
| Docker Compose            |
| Kubernetes                |
| Git                       |
| GitHub Actions (opcional) |

---

# 📁 Estrutura do Projeto

```text
PROJETO-JMJ-ANGULAR
│
├── backend
│   │
│   ├── auth-service
│   │   ├── config
│   │   ├── controller
│   │   ├── model
│   │   ├── repository
│   │   └── service
│   │
│   ├── task-service
│   │   ├── controller
│   │   ├── model
│   │   ├── repository
│   │   └── service
│   │
│   └── docker-compose.yml
│
├── frontend
│   │
│   ├── core
│   │   ├── guards
│   │   ├── interceptors
│   │   └── services
│   │
│   ├── features
│   │   ├── auth
│   │   └── tasks
│   │
│   ├── shared
│   ├── app.routes.ts
│   └── app.config.ts
│
├── k8s
│   ├── deployments
│   ├── services
│   ├── ingress
│   └── configmaps
│
└── README.md
```

---

# ⚙️ Pré-requisitos

```bash
Node.js >= 18
Angular CLI >= 18
Java 21
Maven
Docker
Docker Compose
Git
```

Verificação:

```bash
node --version
ng version
java --version
mvn --version
docker --version
git --version
```

---

# 🚀 Executando Localmente

## 1. Clonar o Projeto

```bash
git clone https://github.com/seu-usuario/projeto-jmj-angular.git

cd PROJETO-JMJ-ANGULAR
```

---

## 2. Executar Backend

### Docker (Recomendado)

```bash
cd backend

docker-compose up -d
```

Verificar containers:

```bash
docker-compose ps
```

Logs:

```bash
docker-compose logs -f
```

---

### Maven

Auth Service

```bash
cd backend/auth-service

mvn spring-boot:run
```

Task Service

```bash
cd backend/task-service

mvn spring-boot:run
```

---

## 3. Executar Frontend

```bash
cd frontend

npm install

ng serve
```

ou

```bash
ng serve --open
```

---

# 🌐 Endpoints

## Auth Service

Base URL:

```http
http://localhost:8080
```

| Método | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

---

## Task Service

Base URL:

```http
http://localhost:8081
```

| Método | Endpoint        |
| ------ | --------------- |
| GET    | /api/tasks      |
| POST   | /api/tasks      |
| PUT    | /api/tasks/{id} |
| DELETE | /api/tasks/{id} |

---

# 🔑 Exemplo de Login

```bash
curl -X POST \
http://localhost:8080/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email":"admin@email.com",
  "password":"123456"
}'
```

Resposta:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

---

# 🧪 Testes

## Backend

```bash
mvn test
```

Cobertura:

```bash
mvn test jacoco:report
```

---

## Frontend

```bash
ng test
```

Cobertura:

```bash
ng test --code-coverage
```

---

# 🐳 Docker

Subir ambiente completo:

```bash
docker-compose up -d --build
```

Parar:

```bash
docker-compose down
```

Remover volumes:

```bash
docker-compose down -v
```

---

# ☸️ Kubernetes

Aplicar manifests:

```bash
kubectl apply -f k8s/
```

Verificar pods:

```bash
kubectl get pods
```

Verificar serviços:

```bash
kubectl get svc
```

Rollback:

```bash
kubectl rollout undo deployment/auth-service
```

---

# 📊 Banco de Dados H2

## Auth Service

```http
http://localhost:8080/h2-console
```

JDBC URL:

```text
jdbc:h2:mem:authdb
```

---

## Task Service

```http
http://localhost:8081/h2-console
```

JDBC URL:

```text
jdbc:h2:mem:taskdb
```

---

# 📦 Deploy Produção

## Frontend

```bash
ng build --configuration production
```

---

## Backend

```bash
mvn clean package -DskipTests
```

Executar:

```bash
java -jar target/application.jar
```

---

# 🔒 Variáveis de Ambiente

### Frontend

```typescript
export const environment = {
  production: true,
  authApiUrl: 'https://api.seudominio.com/auth',
  tasksApiUrl: 'https://api.seudominio.com/tasks'
};
```

### Backend

```properties
server.port=8080

spring.datasource.url=${DB_URL}

jwt.secret=${JWT_SECRET}

jwt.expiration=${JWT_EXPIRATION}
```

---

# 📈 Roadmap

* [ ] Refresh Token
* [ ] Swagger/OpenAPI
* [ ] PostgreSQL
* [ ] Redis Cache
* [ ] Observabilidade com Prometheus
* [ ] Grafana
* [ ] CI/CD GitHub Actions
* [ ] Testes E2E
* [ ] Multi-Tenant

---

# 🤝 Contribuição

```bash
git checkout -b feature/minha-feature

git commit -m "feat: nova funcionalidade"

git push origin feature/minha-feature
```

Abra um Pull Request 🚀

---

# 📄 Licença

Distribuído sob licença MIT.

---

# 👨‍💻 Autor

Desenvolvido como parte de um desafio técnico Full-Stack utilizando Angular, Spring Boot e práticas modernas de engenharia de software.
