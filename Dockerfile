# Use the official OpenJDK image as the base image
FROM openjdk:21-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Maven wrapper and POM file
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Ensure that we have execute rights on the mvnw
RUN chmod +x ./mvnw

# Download necessary dependencies for the application
RUN ./mvnw dependency:resolve

# Copy the project files
COPY src ./src

# Package the application
RUN ./mvnw package -DskipTests

# Expose the port the application will run on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "target/mike-0.0.1-SNAPSHOT.jar"]
