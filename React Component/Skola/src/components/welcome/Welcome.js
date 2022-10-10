import React from "react"; // In order to create a class component, we need to import React
/* 
    To think about when creating a class component:
    1- Import React
    2- Use the keyword class
    3- The class name should be in Uppercase as in "Welcome"
    4- Extends React.component
    5- Call render() method which is the only required method to have when creating a class component
    6- export your class
*/
class Welcome extends React.Component {
    componentDidMount() {
        // componentDidMount triggered when the component is loaded into the DOM
        var data = localStorage.getItem("item"); // We can use it for exampel to fetch data from database at mounting
        console.log("Mount method");
    }
    componentDidUpdate() {
        // componentDidUpdate triggered if some data is update. We will talk further about this in next week 
        console.log("Did update method");
    }
    componentWillUnmount() {
        //componentWillUnmount is triggered before the Component is removed from the DOM. 
        localStorage.setItem("item", "Hi") // We can it use for example for saving data before unmounting
        console.log("Component will unmount");
    }
   
    myName = "Max"
    showMyName = () => {
        this.myName = "Omar"
        return (
            <h1>my name is {this.myName}</h1>
        )
    }
    render() {
        return (
            <div>
                <h1 className="welcomeReact">Welcome {this.myName} to welcome Component</h1>
                {this.showMyName()}
            </div>
        )
    }
}

export default Welcome;