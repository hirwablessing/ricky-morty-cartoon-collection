# Fleek Front-End Assignment

Within this codebase, I built the solution to a Frontend Engineer assessment on building a web app for listing characters from the Rick and Morty TV Show via the [REST Rick and Morty API](https://rickandmortyapi.com/documentation)

<div style="display: flex; justify-content: center;" >
![image](https://user-images.githubusercontent.com/50826640/194672859-b3161bc7-485c-4321-bc79-3f2d8e37ac59.png)

</div>

## Edge Cases Handled:

Though it wasn't instructed, I handled the following edge cases for better app experience;

- Created a debouncer function to slow down the execution of API requests against API to filter characters by name. This was done to optimize the text filter experience.
- Created a custom React Hook to close the mobile sidebar when the ESCAPE key is pressed.
- The application passes episode data as a state value and access them from the Episode page. I put a check in place to handle scenarios where a user refreshes the application while in the episode page and losses the state value.
- Used `Preact signal` for state handling instead of `useState` to increase perfomance as they use Proxies for updating VDOM. More details can be found [here](https://preactjs.com/blog/introducing-signals/). They're very life saving and worth checking out :)

### Packages Used:

- React-router-dom ( for routing )
- React-icons ( for SVG icons used )
- Redux-toolkit ( for state management )
- Typescript for typing
- Tailwind JIT for some stylings
- eslint for linting
- React testing library
- Styled-Components ( for styling components using the CSS-in-JS approach)

### Installation:

- Clone the GitHub repository
- Install application dependencies using a package manager. I recommend using yarn with the `yarn install` command.
- View the application running on your local host via your browser at `http://localhost:3000`

**Note:** The Rick and Morty public API endpoint is already listed in the `.env` file for an easy setup. I take note that environment variables should be included in the `.gitignore` file.

### Testing:

This component has a few E2E test suites setup using React-testing-library.
Although I did not have much time left cover the entire application with test suites, I was able to create a test suite for the `Header` and `Card` components each.

### If I had more time I would change this

- Set up continuous integration to run the tests and ESLint on every Pull Request
- Integration tests using React Testing Library
- Add end-to-end tests with Cypress.
- Add validations to my forms and asynchronous codes.
- Remove some eslint warnings shown in the console
- Remove all any types on the frontend part like [here](https://github.com/hirwablessing/fleek-frontend-assignment/blob/8b6209d5b181b5d1589c28e9190cf0cf43f4c106/src/state/index.ts#L14)
- Refactor and refactor again.

Execute the command below to run the test suites;

```bash
    npm run test
```
