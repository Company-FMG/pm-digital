FROM openjdk:21-slim

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline

COPY src ./src

CMD ["java", "-jar", "target/mike-0.0.1-SNAPSHOT.jar"]