import React from "react";

export default function About() {
  return (
    <section className="section about-section">
      <h1 className="section-title"> About This Project</h1>
      <p>
      <h2>About This Project</h2>
  <p>
    This project is built using <strong>React</strong>, a popular JavaScript library for building user interfaces. React's component-based architecture allowed for modular and efficient development, ensuring a smooth user experience.
  </p>

  <h3>Data Source: Cocktail DB Open API</h3>
  <p>
    The project utilizes the <strong>Cocktail DB Open API</strong> to fetch and display various drink-related data. Leveraging this API's endpoints, the application retrieves details about cocktails, ingredients, recipes, and more. This integration enables dynamic and diverse content for users.
  </p>

  <h3>Functionality</h3>
  <ul>
    <li>
      <strong>Data Fetching:</strong> Utilizing the Cocktail DB Open API, the project fetches information from various endpoints in real-time, ensuring updated and comprehensive data for users.
    </li>
    <li>
      <strong>Dynamic Display:</strong> Users can request specific data, such as cocktail recipes, ingredients, or details about particular drinks, which are then seamlessly displayed within the application interface.
    </li>
  </ul>

  <h3>Implementation Details</h3>
  <ul>
    <li>
      <strong>API Interaction:</strong> The application interacts with the Cocktail DB Open API through asynchronous requests, handling responses to provide users with accurate and relevant information.
    </li>
    <li>
      <strong>Component Structure:</strong> React's component-based structure allows for the creation of modular and reusable UI elements, facilitating a scalable and maintainable codebase.
    </li>
  </ul>

  <h3>Key Technologies Used</h3>
  <ul>
    <li><strong>React:</strong> Frontend library for building user interfaces.</li>
    <li><strong>Axios:</strong> HTTP client for making API requests from the React application.</li>
    <li><strong>React Router:</strong> Facilitates navigation within the application by enabling routing and rendering different components based on URLs.</li>
  </ul>
      </p>
    </section>
  );
}
