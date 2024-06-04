FROM openjdk:21-slim AS builder
WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline

COPY src ./src

RUN mvn -B package -DskipTests

FROM openjdk:21-slim

WORKDIR /app

COPY --from=builder /app/target/*.jar mike-0.0.1-SNAPSHOT.jar

EXPOSE 8080

CMD ["java", "-jar", "mike-0.0.1-SNAPSHOT.jar"]