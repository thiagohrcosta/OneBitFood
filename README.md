
# OneBitFood
Project developed during the OneBitCode week (Ruby on Rails).
![mainGif](https://res.cloudinary.com/dloadb2bx/image/upload/v1621122897/Peek_15-05-2021_20-53_ljblcj.gif)

## Technologies used in this project
<img alt="Ruby" src="https://img.shields.io/badge/ruby-%23CC342D.svg?&style=for-the-badge&logo=ruby&logoColor=white"/> <img alt="Rails" src="https://img.shields.io/badge/rails-%23CC0000.svg?&style=for-the-badge&logo=ruby-on-rails&logoColor=white"/> <img alt="Next JS" src="https://img.shields.io/badge/nextjs-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white"/> <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

## Show
![enter image description here](https://res.cloudinary.com/dloadb2bx/image/upload/v1620677659/oneBitShow_neps9t.png)

## Database
![enter image description here](https://res.cloudinary.com/dloadb2bx/image/upload/v1620677116/dbOneBitFood_ii3gmn.png)

## How to run this project?
Thiso project was building using the **backend as API**, because of that after download, you need to open the `onebitfood-api`and run `rails s` to start the backend API. After that, go to `onebitfood-client` and run `yarn dev` to start or front-end in React that will get the data from the API

 - The backend will be running on `localhost:3000`
 - The frontend will be running on `localhost:3001`

## Development routine

**May 10**

    - Project created in Rails;
    - Ransack and rack-cors gems added;
     - Model Category created;
     - Model Restaurant created;
     - Model ProductCategory created;
     - Model Product created;
     - Model order created;
     - Default status to order added;
     - Migration runned;
     - Relashionship between models finished;
     - Validations added to models;
     - Controller Categories created;
     - Controller Restaurants created;
     - Controller Orders created;
     - Controller AvailableCities created;
     - Active Storage added;
     - Seeds added;
     - Added image to seed;
     - Fix bugs on API's endpoint
     - Filter with ransack gem added;
     - Filter by city and category added;
     - Action created on Order Controller;
     - Migration added to insert street to Order;
     - CORS used;
     - ** DAY ONE FINISHED **  -

**May 12**

     - Bug fixed on CORS;
     - Folder Refactored to allow backend and frontend in the same project;
     - Project with NextJS created;
     - SWR added;
     - React-icons, favicon added;
     - Variables added to manage colors on CSS;
     - Bootstrap imported;

**May 13**

     - @media added to perform responsive layout;
     - Header and Logo added;
     - Main page CSS and Logo CSS added;

**May 14**

     - Index page updated;
     - Typeriter component created;
     - useState and useEffect added;
     - Service folder with toCurrency and truncateString created;
     - Category title to OneBitFood API added;
     - getRestaurant on services added with SWR;
     - React Slick added;
     - getCategories added;
     - Search bar added;
     - Restaurant details added;
     - Category Products added;
     - Recoil implementation added;

**May 15**

     - Bug fixed on backend(API);
     - Cities modal added;
     - getAvailable cities added;
     - Modal added to force user to choose a city
