
````markdown
# 📘 Combined Documentation – Assignment 1 & Assignment 2

## Table of Contents
- [Assignment 1 – React Dashboard Application](#assignment-1--react-dashboard-application)
  - [Features](#features-1)
  - [Setup Instructions](#setup-instructions-1)
  - [Getting Started](#getting-started-1)
  - [Live Deployments](#live-deployments-1)
  - [Usage](#usage-1)
  - [Project Structure](#project-structure-1)
  - [Screenshots](#screenshots-1)
  - [Demo Video](#demo-video-1)
- [Assignment 2 – Reusable Components Demo](#assignment-2--reusable-components-demo)
  - [Features](#features-2)
  - [Getting Started](#getting-started-2)
  - [Installation](#installation-2)
  - [Live Deployments](#live-deployments-2)
  - [Usage](#usage-2)
  - [Project Structure](#project-structure-2)
  - [Screenshots](#screenshots-2)
  - [Demo Video](#demo-video-2)
- [Author](#author)

---

# Assignment 1 – React Dashboard Application

## Features
- 🔑 User Authentication (Login & Signup)
- 📊 Dashboard with sidebar, navbar, cards
- 👤 User Profile (data from JSON Server)
- 🔗 API Integration with `db.json`
- 🌍 Context API for global state
- 🛣 Routing with `react-router-dom`
- 📱 Responsive Design

---

## Setup Instructions

### ✅ Prerequisites
- Node.js & npm installed
- JSON Server installed globally:
  ```bash
  npm install -g json-server
````

## Getting Started

### 1. Clone repositories

Frontend:

```bash
git clone https://github.com/MALLIKHARJUNCH-02/OneVarsity.git
cd assignment1
```

Backend:

```bash
git clone https://github.com/MALLIKHARJUNCH-02/json-server-assignment1_backend.git
cd json-server-assignment1_backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup JSON Server

Create `db.json` in backend root:

```json
{
  "users": []
}
```

Start JSON Server:

```bash
json-server --watch db.json --port 3001
```

### 4. Run React App

```bash
npm start
```

* Frontend → `http://localhost:3000`
* Backend → `http://localhost:3001`

---

## Live Deployments

* Backend: [JSON Server](https://json-server-assignment1-backend.onrender.com)
* Frontend: [React App](https://one-varsity-silk.vercel.app/)

---

## Usage

* 📝 Signup → Create user
* 🔑 Login → Authenticate
* 📊 Dashboard → View sample data
* 👤 Profile → Fetch user details

---

## Project Structure

```
src/
  ├── App.js
  ├── Login.js
  ├── Signup.js
  ├── Dashboard.js
  ├── Profile.js
  ├── UserContext.js
  ├── styles.css
public/
  ├── index.html
db.json
package.json
README.md
```

---

## Screenshots

![Login](./login.png)
![SignUp](./signup.png)
![Form Validation](./formvalidation.png)
![Form Validation](./formvalidation1.png)
![User Profile](./userprofile.png)
![Dashbord](./dashboard.png)
![Added Another User](./addedanotheruser.png)

---

## Demo Video

[🎥 Watch the Demo](https://drive.google.com/file/d/1FmoleG8edRa1YJt1wNKZB21GGCHa_kQF/view?usp=sharing)

---

# Assignment 2 – Reusable Components Demo

## Features

* ♻️ Reusable Components (Button, Modal, Form Input, Table)
* 🔗 JSON Server Integration
* ✅ Form Validation
* ⚡ Dynamic UI Updates
* 🎨 CSS Modules Styling

---

## Getting Started

### ✅ Prerequisites

* Node.js & npm
* JSON Server installed:

  ```bash
  npm install -g json-server
  ```

### Installation

```bash
git clone https://github.com/MALLIKHARJUNCH-02/OneVarsity1.git
cd OneVarsity1
npm install
```

### Setup JSON Server

`db.json`:

```json
{
  "users": []
}
```

Run JSON Server:

```bash
json-server --watch db.json --port 3001
```

Start React App:

```bash
npm start
```

---

## Live Deployments

* Backend: [JSON Server](https://json-server-assignment2-backend.onrender.com)
* Frontend: [React App](https://one-varsity1.vercel.app/)

---

## Usage

* Add user via modal
* Validate form fields
* Display data in table
* Data persisted in JSON Server

---

## Project Structure

```
src/
  ├─ App.jsx
  ├─ Button.jsx
  ├─ Modal.jsx
  ├─ FormInput.jsx
  ├─ Table.jsx
  ├─ *.module.css
db.json
package.json
README.md
```

---

## Screenshots

![Home](./home.png)
![Form Validation](./formvaladition.png)
![Add New User](./newuser.png)

---

## Demo Video

[🎥 Watch the Demo](https://drive.google.com/file/d/1XAdYJPrD5PEj28ThFgvsW9y-oRn12bpt/view?usp=sharing)

---

# Author

👨‍💻 **Chilukuri Mallikharjun Reddy**
🔗 [GitHub Profile](https://github.com/MALLIKHARJUNCH-02)

```

---

👉 Copy this into a file called `README.md` and it will work perfectly on **GitHub** with clickable navigation.  

Do you also want me to add **“Back to Top”** links under each major section for quicker scrolling?
```
