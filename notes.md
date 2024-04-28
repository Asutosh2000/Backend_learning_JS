# Project Structure

This document outlines the folder structure of the project, providing a clear overview of how the files and directories are organized. Each section plays a critical role in the application's architecture and functionality.

## Src

The `src` directory contains the core code of the application, including the initial database connection setup, application configuration, and more.

- **index**: Initializes database connections and serves as the entry point of the application.
- **App**: Contains application configurations, middleware for cookie parsing, and URL encoding settings.
- **Constants**: Defines enums, database configurations, and other constants used throughout the application.

## DB

The `DB` directory holds the database migration and seed files, establishing the schema and initial data setup for the application.

## Models

This directory contains the models of the application, defining the structure of the database tables and the relationships between them.

## Controllers

Controllers handle the business logic of the application. Each controller manages the data flow into model objects and updates the view whenever data changes.

## Routes

The `routes` directory defines the endpoints of the application and associates them with their respective controller actions.

## Middleware

Middleware functions are used to process requests before they reach the routes. This directory contains custom middleware for authentication, logging, error handling, etc.

## Utils

The `Utils` folder includes utility functions and helpers that provide common functionality across the application, such as date formatting, encryption, and more.

## More (depends)

This section can be expanded with additional directories as needed by the project, such as `services`, `libraries`, or `tests`, depending on the project's requirements.
