# Docker Compose

Um `docker-compose.yml` descreve um ou mais containers como um único arquivo declarativo. `image` diz qual software rodar, `environment` configura variáveis internas do container (aqui, usuário/senha/banco do Postgres), e `ports: "HOST:CONTAINER"` expõe uma porta do container pra sua máquina.
