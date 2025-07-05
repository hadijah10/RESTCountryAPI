# 🌍 RESTCountryAPI

A simple client that fetches and displays country data using the REST Countries API. Includes search and region filter functionality, and detailed views per country.

Table of Contents
Demo

Features

Tech Stack

Setup & Usage

Project Structure

Scripts

Contributing

License

## Demo 
 [Visit the site] (https://rest-country-api-nine-nu.vercel.app/)
Homepage with search & filter
Country detail page with bordering countries

#  Features
Fetches global country data via the [REST Countries API] and manage them using ngrx.

Search countries by name

Filter countries by region (Africa, Asia, Europe, etc.)

Detail view per country: flag, capital, population, borders

Navigate to bordering countries from the detail view

Support for light/dark themes

## Implementation details
Ngrx store and effects were first installed. With commands **ng add @ngrx/store@latest and **ng add @ngrx/effects@latest
Stores, Reducers and Effects were created to manage fetching of data for all countries as well as that oa single country. 

Actions for filtering was made to trigger filtering of the loaded countries by nae and countries

Custom pipes were creates to transfor nexted values of the object.

The themeswitcher also made us of the switching color. Its made use of Renderer2 to manipulate the DOM.The themeswitcher made use of ngrx store for   the manipulation of data to achieve the result.

#  Tech  Stack
Frontend: Angular 

HTTP Client: Augular's httpclient service

Styling: SCSS

Optional: Theme toggler, state management

## 🔧 Setup & Usage
1. Clone the repo.With git clone https://github.com/hadijah10/RESTCountryAPI.git
2. Install dependencies. npm install
3. Run locally with npm start of ng serve. Visit configured port. 
4. Build for production.npm run build. 

## Project Structure
src/
├── app/
│   ├── components/
│   │   ├── CountryList/
│   │   └── CountryDetail/
│   ├── services/
│   │   └── country.service.ts
│   ├── pipes/
│   │   └── filter.pipe.ts
│   ├── store/
│   |   └──action
│   |   └──effects
│   |   └──reducers
│   |   └──selectors
│   ├── app.component.*
│   └── app.module.ts
└── assets/
    └── styles/
        └── _variables.scss


