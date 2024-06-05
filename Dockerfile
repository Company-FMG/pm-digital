FROM maven:3.9.6-eclipse-temurin-21-jammy as build
WORKDIR /app
COPY . .
RUN mvn clean package -X -DskipTests

FROM openjdk:21-jdk
WORKDIR /app
COPY --from=build ./app/target/.jar ./mike-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT java -jar mike-0.0.1-SNAPSHOT.jar