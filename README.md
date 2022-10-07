# Fleek Front-End Assignment

Within this codebase, I built the solution to a Frontend Engineer assessment on building a web app for listing characters from the Rick and Morty TV Show via the [REST Rick and Morty API](https://rickandmortyapi.com/documentation)


<div style="display: flex; justify-content: center;" >
<img style="width: 800px; height: 500px;" src="https://res.cloudinary.com/dkfptto8m/image/upload/v1656329058/job-assessment-screenshots/Screen_Shot_2022-06-27_at_12.20.56_PM.png" />
<img style="width: 270px; height: 500px;" src="https://res.cloudinary.com/dkfptto8m/image/upload/v1656329057/job-assessment-screenshots/Screen_Shot_2022-06-27_at_12.21.07_PM.png" />
</div>

## Edge Cases Handled: 
While not instructed to, I handled the following edge cases;

- Created a debouncer function to slow down the execution of API requests against API to filter characters by name. This was done to optimize the text filter experience. 
- Created a custom React Hook to close the mobile sidebar when the ESCAPE key is pressed. 
- The application passes episode data as a state value and access them from the Episode page. I put a check in place to handle scenarios where a user refreshes the application while in the episode page and losses the state value. 

### Packages Used: 
- React-router-dom ( for routing )
- React-icons ( for SVG icons used )
- Redux-toolkit ( for state management )
- Styled-Components ( for styling components using the CSS-in-JS approach)
### Installation: 
- Clone the GitHub repository
- Install application dependencies using a package manager. I recommend using yarn with the `yarn install` command.  
- View the application running on your local host via your browser at `http://localhost:3000`

**Note:** The Rick and Morty public API endpoint is already listed in the `.env` file for an easy setup. I take note that environment variables should be included in the `.gitignore` file.

### Testing: 
This component has a few E2E test suites setup using React-testing-library. 
Although I did not have much time left cover the entire application with test suites, I was able to create a test suite for the `Header` and `Card` components each. 

Execute the command below to run the test suites;

```bash
    npm run test
```