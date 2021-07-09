# Taskie

A simple task management application.

### Features

- Tasklist - a page that displays all tasks.
- Taskadd - a page to add a task to the list.
- Task completion - a checkbox to mark completed task.

# Table of Contents

- [Getting Started](#Getting-Started "Goto Getting-Started")
- [Technology Stack](#Technology-Stack "Goto Technology-Stack")
- [Setup and Installation](#Setup-and-Installation "Goto Setup-and-Installation")
- [Usage](#Usage "Goto Usage")

## Getting Started

Taskie is a React on Rails 6 web application.

## Technology Stack

- [ReactJS](https://reactjs.org/)
- [Ruby 2.5.1](https://www.ruby-lang.org/en/)
- [Ruby on Rails 6.0.3](https://rubyonrails.org/)
- [Bundler 2.1.4](https://bundler.io/)
- [SQLite database](https://www.sqlite.org/index.html)

## Setup and Installation

#### Prerequisites

You will need to install `Ruby`, `Rails` and `Node JS` on your machine.

#### Setup

1. Clone the repository using the command: `$ git clone git@github.com:ODINAKACHUKWU/taskie.git`.

2. Change directory into the root of the project directory.

3. Run `bundle install` on the terminal to install project dependecies.

4. Run `rails db:migrate` on the terminal to create database table(s).

5. Run `rails db:seed` on the terminal to seed the database.

## Usage

After successfully setting up the project on your machine and installing project's dependencies:

1. start the application using the command: `$ rails s`.

2. Visit the site on your browser using `localhost:3000`. You should see the list of tasks added to the database on seeding.

3. To add a task, click the `+` icon on the header. Fill in the required title, desription (optional), and avatar url (optional); and click the add button.

4. To mark a task as completed, click the checkbox on each task. You should see the time of completion displayed after the checkbox disappears.
