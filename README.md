# Create a new React App

```
$ yarn create react-app cat-tinder-frontend
$ cd cat-tinder-frontend
$ git remote add origin GitHub - learn-academy-2021-echo/cat-tinder-frontend-savvytabby: cat-tinder-frontend-savvytabby
$ git checkout -b main
$ git add .
$ git commit -m 'init commit'
$ git push origin main  (even though it says "nothing to commit, working tree clean" we still push it, to get the link)
```
```
$ yarn start (start the server) --> open browser type localhost:3000
```



# Frontend structure in MVP

## Create Directories

```
$ git checkout -b frontend-structure
create three folders : components, pages and assets under src folder
```

## Create Component Files

```
create two files : Header.js Footer.js under components folder
```

## Create Page Files

```
create six files : Home.js CatIndex.js CatShow.js CatNew.js CatEdit.js NotFound.js under pages folder
```
### In the App.js file

```javascript
import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <CatIndex />
        <CatShow />
        <CatNew />
        <CatEdit />
        <NotFound />
        <Footer />
      </>
    );
  }
}
```

## Add Routes

```
$ yarn add react-router-dom@5.3.0
```
```javascript
import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catindex" component={CatIndex} />
          <Route path="/catshow" component={CatShow} />
          <Route path="/catnew" component={CatNew} />
          <Route path="/catedit" component={CatEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App
```

## Install bootstrap & reactstrap

```
$ yarn add bootstrap
$ yarn add reactstrap
Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
```

## Create mockCats.js

```
create mockCats.js under src folder
```

```javascript
let cats = [
  {
    id: 1,
    name: "Mittens",
    age: 5,
    enjoys: "sunshine and warm spots",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Raisins",
    age: 4,
    enjoys: "being queen of the dogs",
    image:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    id: 3,
    name: "Toast",
    age: 1,
    enjoys: "getting all the attention",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];
export default cats;
```

#### In the App.js file

```javascript
import cats from "./mockCats";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: mockCats
    }
  }
```
## Add Assets Files

```
add two files: 404error.jpg and catLogo.jpg under assets folder
```

## Add UI Features

### In the Header.js file

```javascript
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import catLogo from '../assets/catLogo.jpg';
import '../App.css'

class Header extends Component {
  render() {
    return(
        <>
          <header>
            <section className='header'>
              <section className='catLogo'>
                <NavLink to = "/" >
                <img src = {catLogo} alt = "logo for Header" ></img>
                </NavLink>

              </section>

              <section className='navbar'>
                 <div className='nav-links'>
                   <ul>
                     <NavLink to = "/catindex" className='navbaritem'>Meet the cat</NavLink>  
                   </ul>
                   <ul>
                     <NavLink to = "/catnew" className='navbaritem'>Add a cat</NavLink>
                   </ul>
                </div>
                <hr className='header-seperator'/>
              </section>

            </section>

            {/* <NavLink to = "/" >
              <img src = {catLogo} alt = "logo for Header" ></img>
            </NavLink>
            <div className='nav-links'>
                <ul>
                  <NavLink to = "/catindex">Meet the cat</NavLink>  
                </ul>
                <ul>
                  <NavLink to = "/catnew">Add a cat</NavLink>
                </ul>
            </div> */}
          </header>

        </>

    )
  }
}

export default Header
```

### In the Footer.js file

```javascript
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

class Footer extends Component {
  render() {
    return(
        <>
          <footer>
          <hr className='footer-seperator'/>  
          <section className='footer'>
              <section className='navbar'>
                 <div className='nav-links'>
                    <ul>
                      <NavLink to = "/" className='navbaritem'>Go To Homepage</NavLink>
                    </ul>
                    <nav>
                      <a href="#top" className='navbaritem'>Take me to the top</a>
                    </nav>
                </div>
              </section>
            </section>
                {/* <ul>
                  <NavLink to = "/">Go To Homepage</NavLink>
                </ul>
                <nav>
                  <a href="#top">Take me to the top</a>
                </nav> */}
            <hr className='footer-seperator'/>
          </footer>

        </>

    )
  }
}

export default Footer
```

### In the NotFound.js file

```javascript
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import notFoundLogo from '../assets/404error.jpg';


class NotFound extends Component {
  render() {

    return(
       <>

          <img src = {notFoundLogo} alt = "logo" ></img>
          <ul>
            <NavLink to = "/">Go To Homepage</NavLink>
          </ul>
       </>

    )
  }
}

export default NotFound
```

### In the App.css file

```Cascading Style Sheets (css)

  .header{
    display: flex;
    flex: 1;
    display: inline-flex;
  }
  .navbar{
    display: flex;
    flex-direction: row;
  }
  .navbaritem{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    color: inherit;
    text-decoration: inherit;
    text-transform: uppercase;
    outline: none;
    font-weight: bolder;
  }

  .footer{
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .nav-links{
    display: flex;
    justify-content: center;
    text-align: center
  }
  .header-seperator{
    flex-grow: 1;
    border:none;
    height: 1px;
    background-color: red;
    width: 100%;
  }
  .footer-seperator{
    flex-grow: 1;
    border: none;
    height: 80px;
    background-color: black;
    width: 100%;
  }
```

# After you pull down from GitHub (partner first time pull from GitHub)
```
$ yarn  (just type yarn)
```
# Cat Tinder Testing with Jest and Enzyme

- Install Enzyme

```
$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
(Then there will be a App.test.js shown up) delete the content in this file
```
- Test the file
```
$ yarn test
```
-App.test.js

```javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Home from './pages/Home'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When App renders", () => {
  it("displays a header and footer", () => {
    //Arrange
    const renderedApp = shallow(<App/>)
    //variable that class on shallow which is passed an arguemnt
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")
    //Assert
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })
  it("provideing a route'/' to the home component",() => {
      const renderedApp = shallow(<App/>)
      const renderedHomeRoute = renderedApp.find('[path="/"]')
      console.log("Rendered Home Debug", renderedHomeRoute.debug());
      console.log("Rendered Home Props", renderedHomeRoute.props());
      expect(renderedHomeRoute.length).toEqual(1)
      expect(renderedHomeRoute.props().component).toEqual(Home)
  })
})
```


-Header.test.js
```
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({adapter: new Adapter()})

describe("when the header loads...", () => {

  it("display a navlink on the header", () => {
    //Arrange
    const renderedHeader = shallow(<Header/>)
    //variable that class on shallow which is passed an arguemnt
    const navLinkWrapper = renderedHeader.find("NavLink")
    //Assert
    expect(navLinkWrapper.length).toEqual(3)

  })
  it("display a section on the header", () => {
    //Arrange
    const renderedHeader = shallow(<Header/>)
    //variable that class on shallow which is passed an arguemnt
    const sectionWrapper = renderedHeader.find("section")
    //Assert
    expect(sectionWrapper.length).toEqual(3)

  })
})
```

--stretch DRY
```javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({adapter: new Adapter()})

describe("when the header loads...", () => {
  let header
  beforeEach(()=>{
    header = shallow(<Header/>)
  })
  it("display a navlink on the header", () => {

    //variable that class on shallow which is passed an arguemnt
    const navLinkWrapper = header.find("NavLink")
    //Assert
    expect(navLinkWrapper.length).toEqual(3)

  })
  it("display a section on the header", () => {
    //Arrange

    //variable that class on shallow which is passed an arguemnt
    const sectionWrapper = header.find("section")
    //Assert
    expect(sectionWrapper.length).toEqual(3)

  })
})
```






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
