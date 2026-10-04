# URL Shortener

Encurtador de URL com geração de códigos curtos, cache, mensageria e contagem de acessos em tempo real.

## Objetivo de aprendizado

Este projeto existe para aprender, na prática, conceitos de system design aplicados a um encurtador de URL:

- Geração de short codes com ID incremental + base62 + Sqids (e por que não fazer hash da URL)
- Camada de cache com métricas de hit/miss
- Redirects 301 vs 302
- Mensageria com RabbitMQ (ack manual, idempotência, DLQ)
- Atualização em tempo real com Server-Sent Events
- Clean Architecture leve + CQRS, testes automatizados e ambiente em Docker

Referência funcional e conceitual: [Encurtador de URL — Raphael Sasso](https://www.raphaelsasso.com/url-shortener)

## Status

🚧 **Em construção — milestone #00**

Acompanhe o roadmap na página de [milestones](https://github.com/djotanas/url-shortener/milestones).

## Stack planejada

| Camada | Tecnologia |
|---|---|
| Front-end | React (versão a definir no ADR 0001) + TypeScript + Vite |
| Estado de servidor | TanStack Query |
| Testes front | Vitest + Testing Library + MSW |
| Back-end | .NET (versão a definir no ADR 0001) — ASP.NET Core Minimal APIs |
| Banco | PostgreSQL + EF Core |
| Códigos curtos | Sqids |
| Cache | `IMemoryCache` (Redis opcional) |
| Mensageria | RabbitMQ |
| Tempo real | Server-Sent Events (SSE) |
| Testes back | xUnit + NSubstitute + Shouldly + Testcontainers |
| Containers | Docker + Docker Compose |
| CI | GitHub Actions |
