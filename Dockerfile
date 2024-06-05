# Use the official OpenJDK image as the base image
FROM openjdk:21-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file into the container
COPY target/mike-0.0.1-SNAPSHOT.jar /app/mike-0.0.1-SNAPSHOT.jar

# Expose the port the application will run on
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "/app/mike-0.0.1-SNAPSHOT.jar"]