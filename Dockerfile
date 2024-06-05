FROM openjdk:21-jre-slim
COPY target/mike-0.0.1-SNAPSHOT.jar.jar /app/mike-0.0.1-SNAPSHOT.jar
CMD ["java", "-jar", "/app/mike-0.0.1-SNAPSHOT.jar"]
