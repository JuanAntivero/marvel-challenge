![image](https://github.com/user-attachments/assets/814c2fce-9a52-4c17-b0ec-4ac3a735291f)
# Marvel Challenge
Simple project created with React+Typescript to display Marvel heroes and their descriptions. Testing with vitest and react-testing-library.

![image](https://github.com/user-attachments/assets/e562f32b-bc53-4d2a-adf9-4b583c5759bc) ![image](https://github.com/user-attachments/assets/63a0d571-4055-44ef-b175-304b69cb2a03) ![image](https://github.com/user-attachments/assets/37a08a4b-3020-4105-abd5-2a388cc9dbb1)

# Setup
1. Clone this repository
  ```
  git clone https://github.com/JuanAntivero/marvel-challenge.git
  ```
2. Go to root folder and install dependencies
  ```
  npm install
  ```
3. Create ``.env.development`` file. Use ``.env.example`` as reference. You'll need your own API KEY for marvel api, please check https://developer.marvel.com/documentation/getting_started for further information
4. Run the project
  ```
  npm run dev
  ```
5. Open you browser at http://localhost:5173
6. Have fun!

# Testing
Application is covered by mostly integration testings, written with vitest and react-testing-library. They can be run with:
  ```
  npm run test
  ```
> [!NOTE]
> This app was tested following the rules ``Write tests, not to many, mostly integration`` and ``The more your tests resemble the way your software is used, the more confidence they can give you`` proposed by react-testing-library main collaborator, Kent C. Dodds. So it doesn't have unit testing for every component since integration testings are covering every relevant behavior of the application and it's components.

# Build
To build the app to a dist folder with production files
  ```
  npm run build
  ```
# Screenshots
## Home Page
### Desktop view
![image](https://github.com/user-attachments/assets/fd2a507f-430b-4fa8-9101-3bdfa5b41af7)

### Mobile view
![image](https://github.com/user-attachments/assets/ede8df4c-239a-41bc-9a4a-c4df98dfa50d)

### Performed search
![image](https://github.com/user-attachments/assets/1ab5259d-1f66-4070-bb77-74e7a46cc941)

### Favorites selected
![image](https://github.com/user-attachments/assets/86314d97-d1ba-4d72-939b-7cc8ebecb0b2)

## Hero Detail Page
### Desktop view
![image](https://github.com/user-attachments/assets/5c57fbeb-d57f-44d8-a700-a09996e7a82b)

### Mobile view
![image](https://github.com/user-attachments/assets/5dec739d-173c-4b18-969d-49c73aecbef2)

# Technical insights
## Architecture and folder structure

This project follows a **Feature-Driven Design (FDD)** approach, ensuring a modular, scalable, and maintainable codebase. It aligns with **Screaming Architecture**, where the folder structure clearly reflects the application's key features and concerns rather than technical details.  

Each layer of the project is designed for separation of concerns: **pages** act as high-level views, **features** encapsulate reusable UI elements, **components** provide primitive building blocks, and **store** manages global state using Redux Toolkit. API interactions are handled in **services**, while **routes** define navigation. The structure promotes reusability, testability, and ease of expansion as the application grows.

```
├── pages/        - High-level views that compose and consume feature components.
├── features/     - Self-contained, reusable components representing core UI elements (e.g., headers, cards).
├── components/   - Low-level, primitive UI components such as buttons and icons. 
├── hooks/        - Global UI hooks
├── types/        - Global TypeScript type definitions
├── styles/       - Global styles and theme definitions
├── mocks/        - API response mocks for testing purposes.  
├── routes/       - Router configurations defining application navigation. 
├── store/        - Redux store configuration and slices for state management. 
├── utils/        - Global ultility functions
├── services/     - API interaction and data fetching logic
```

## Key used libraries


| Library                     | Purpose                                  |
|-----------------------------|------------------------------------------|
| **@tanstack/react-query**   | Data fetching and caching.               |
| **react-redux & @reduxjs/toolkit** | State management.                 |
| **react-router-dom**        | Client-side routing.                     |
| **vitest**                  | Unit and integration testing framework.  |
| **@testing-library/react**  | Component testing and UI interactions.   |

> [!NOTE]
> Usage of Redux as state manager is a BIG overkill for this small application. It was selected for didactic purposes in order to show some state manager usage.
