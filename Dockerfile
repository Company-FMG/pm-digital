FROM openjdk:21-jre-slim
VOLUME /tmp
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} mike-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/app.jar"]