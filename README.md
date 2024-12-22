*### **Weather App: Description**

The **Weather App** is a simple web application built using **Node.js**, **Express.js**, and **EJS** (a templating engine). It provides real-time weather data based on a user's input of a city name. The app fetches weather information from the **OpenWeatherMap API** and displays it in an easily understandable format, including the current temperature, weather description, and an appropriate weather icon.

Additionally, the app is **dockerized** to ensure consistency across different environments and can be deployed to the cloud using **Azure App Service**.

### **Features of the Weather App**

1. **User Input**: 
   - Users can enter a **city name** in a text box to get weather details.
   - The app is accessible via a web interface (hosted on a server).

2. **Weather Data Fetching**:
   - When the user submits a city name, the app makes an HTTP request to the **OpenWeatherMap API** using **Axios**.
   - It retrieves weather details, including:
     - **Temperature** in Celsius.
     - **Weather Description** (e.g., "clear sky", "light rain").
     - **Weather Icon** (an icon representing the weather condition).

3. **Dynamic Page Rendering**:
   - The **Express.js** server renders the results dynamically using **EJS** templates. The weather data is passed from the server to the `index.ejs` template for display on the client side.
   - If there’s an error (e.g., if the city doesn’t exist or the API fails), the app shows a meaningful error message.

4. **Responsive and Simple Interface**:
   - The app features a simple, user-friendly web interface where the user inputs the city and gets the weather data back immediately.
   - The layout uses **HTML** and **EJS** to dynamically populate the page with weather data.
   - It can be further enhanced with **CSS** for styling.

5. **Error Handling**:
   - The app provides user feedback, including error messages like:
     - "Please enter a city" if the input field is left blank.
     - "Could not fetch weather data. Please try again." if the weather API request fails.

6. **Dockerized for Portability**:
   - The app is containerized using **Docker**, ensuring that it can run consistently across different environments.
   - A `Dockerfile` is provided to build the application image, which can be easily deployed to any platform supporting Docker.

7. **CI/CD Pipeline**:
   - The app is integrated with **Azure DevOps** using a YAML-based pipeline (`azure-pipelines.yml`), which automates the process of building, testing, and deploying the app.
   - The pipeline:
     - **Builds the Docker image** of the app.
     - **Pushes the image** to a container registry.
     - **Deploys the container** to **Azure App Service**, ensuring that the app is available to the public.

8. **Deployment on Azure**:
   - The app is deployed using **Azure App Service**, which provides a scalable cloud platform to host web applications.
   - Once deployed, the app can be accessed via a custom domain or a default Azure URL.

---

### **Tech Stack Used**

- **Node.js**: The runtime for building the server-side logic.
- **Express.js**: A web framework for handling HTTP requests and serving the app's pages.
- **Axios**: A promise-based HTTP client used to fetch weather data from the OpenWeatherMap API.
- **EJS**: A templating engine to dynamically render HTML with weather data.
- **OpenWeatherMap API**: Provides weather data based on city names.
- **Docker**: Containerizes the app, allowing it to be run consistently across different environments (local, cloud, etc.).
- **Azure DevOps**: Automates the build and deployment pipeline.
- **Azure App Service**: Cloud service to host and scale the app.

---

### **How It Works**

1. **User Interaction**:
   - When users access the app, they see a form where they can type in the name of any city.
   - After submitting the form, a request is sent to the Express.js server with the city name as a query parameter.

2. **Backend Logic**:
   - The server, using **Axios**, makes a **GET** request to the **OpenWeatherMap API**, passing the city name to retrieve weather data.
   - If the API call is successful, the server renders the **index.ejs** template and passes the weather data (temperature, description, and icon) to the view.
   - If the API call fails, the server renders the template with an error message.

3. **Rendering the View**:
   - The `index.ejs` file is responsible for displaying the weather information on the web page.
   - If weather data is available, it displays the temperature, weather condition, and an icon representing the current weather.
   - If there is an error (such as the city not being found or the API request failing), the page shows an appropriate error message.

4. **Deployment**:
   - The app is containerized using **Docker** and pushed to a cloud platform like **Azure App Service** for easy deployment and scalability.
   - The CI/CD pipeline in **Azure DevOps** ensures that the latest version of the app is always deployed after changes to the code.

---

### **User Flow**

1. **Open the Weather App**:
   - Users navigate to the URL where the app is hosted (locally or on Azure App Service).
   
2. **Enter a City Name**:
   - Users type a city name (e.g., "London") into the input field and click the "Get Weather" button.

3. **App Fetches Data**:
   - The app fetches the weather data from OpenWeatherMap based on the city entered by the user.

4. **Weather Data Display**:
   - The app displays the weather information:
     - **City Name**
     - **Temperature (°C)**
     - **Weather Description** (e.g., "Clear Sky")
     - **Weather Icon** that visually represents the weather condition.

5. **Error Handling**:
   - If the app cannot fetch the weather data (e.g., incorrect city name or API failure), an error message is shown: "Could not fetch weather data. Please try again."

6. **Responsive Design**:
   - The interface remains simple and easy to use, and can be expanded with additional features like unit conversion (Celsius to Fahrenheit) or multiple city forecasts.

---

### **Usage Example**

1. **Start the app** by navigating to `http://localhost:3000` or a deployed URL.
2. **Enter a city** in the input field (e.g., "New York").
3. **Click "Get Weather"**.
4. The app returns the current weather data:
   - **City**: New York
   - **Temperature**: 23°C
   - **Weather Description**: Clear Sky
   - **Weather Icon**: A sun icon
5. If an invalid city is entered, an error message appears: "Could not fetch weather data. Please try again."

---

### **Possible Enhancements**

1. **Error Handling Enhancements**:
   - Improve error handling to show specific error messages (e.g., for network issues or incorrect API keys).
   
2. **Styling**:
   - Add custom **CSS** styles to make the app visually appealing, ensuring a better user experience.

3. **Unit Conversion**:
   - Allow users to switch between **Celsius** and **Fahrenheit**.

4. **Multiple Cities**:
   - Allow users to get weather data for multiple cities at once or store favorite cities for quick access.

5. **Forecast Data**:
   - Display weather forecasts for multiple days instead of just the current weather.

6. **Authentication**:
   - Implement user authentication if you want to allow users to save their preferences (like favorite cities or units).

---

### **Conclusion**

This **Weather App** is a simple yet functional project that demonstrates key concepts such as:

- Fetching data from an external API (OpenWeatherMap).
- Using **Node.js** and **Express** for backend development.
- **Containerizing** the app with Docker for easy deployment and consistency across environments.
- Automating the deployment process using **Azure DevOps** for CI/CD.

The app can be easily extended with additional features like multi-city support, a user login system, or better UI/UX, making it a good starting point for building more advanced web applications.**
