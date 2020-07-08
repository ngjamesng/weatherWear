# WeatherWear
 ***Project is WIP***
 The Project is live & hosted. Feel free to have a look at it here: 
  
  https://weatherwear-frontend.herokuapp.com/

  A video demo can be watched here:
  https://youtu.be/W5ITGxffAUI
  

## About WeatherWear
Do you ever step outside, only to realize you're unprepared for unexpected weather conditions? You'd have to go back inside to change what you're wearing, and maybe even bring an umbrella. WeatherWear is intended to help people get clothing recommendations based on weather conditions, such as temperature, humidity, wind speed, and precipitation. 

It allows you to find the weather conditions based on a location search, and this is done through an API call. 

After weather information is received, the information is parsed and the program makes a recommendation. 

## Enhancements/features to be implemented

* Ability to specify activity level, to fine tune recommendations. 

  Low activity levels(such as relaxing outside in chilly weather around a fire) may need more layers & a heavier jacket.

  High activity levels (such as jogging in chilly weather) may only need a light jacket layer or a windbreaker. 

* Ability to upload/input wardrobe, so that WeatherWear can make a recommendation based on what you have available. 

* Ability to save past results/queries

* Ability to recommend multiple locations at one time, across different days. This would be useful when traveling. 

## Known issues

* WeatherWear is unable to do every single location. However, for most major locations, WeatherWear will work fine. This is due to the API I chose to use. In the future, I may add more apparent error handling or use multiple sources for weather information. 

## How to get started
1. You will need to install npm and postgreSQL on your computer. I used homebrew for all installations. https://brew.sh/ 

2. In the terminal, you will to go into the backend folder with `cd backend` and run `npm install`. Make sure you run `brew services start postgresql`, `createdb weatherwear-openweather` as well as `psql weatherwear-openweather < data.sql` to create the database. 
3. In the terminal, you will to go into the frontend folder with `cd frontend` and run `npm install`

4. In the `/backend` folder, you will need a .env file. You will also need to sign up for an openweathermap API key for the app to run properly. Your .env file should contain the following:
```
OPEN_WEATHER_API_KEY=REPLACE_WITH_YOUR_API_KEY_HERE
```

### backend/frontend servers
 1. From the home directory in the terminal, run `cd backend` to get into the backend folder, and run `npm start`. This will locally start your backend on port 3001. 
 2. In  a separate terminal window, run `cd frontend` to get into the frontend folder, and run `npm start`. This will start the front end server. 

 3. Open your browser to `localhost:3000` and you should be able to play with the site locally on your machine. 
 
## Technologies used
 * React.js
 * Redux.js
 * Express.js
 * React Bootstrap
 * PostgreSQL
 * openweather API https://openweathermap.org/api
 * other APIs & more!
