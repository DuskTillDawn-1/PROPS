import logo from './logo.svg';
import React from "react";

class App extends React.Component {


  state = {fullName: "Ibtissam", bio: "It's worth it", imgSrc: logo, profession:"Dreamer", show: false,count:0, intervalId:0}

  handleClick=()=>{
    this.setState({show: !this.state.show})

      if(this.state.intervalId){
        clearInterval(this.state.intervalId);
        this.setState(prevState => {
          return {
            ...prevState,
            count: 0,
            intervalId: 0,
          };
        });
        return;
      }
      
      const newIntervalId = setInterval(() => {
        this.setState(prevState => {
          return {
            ...prevState,
            count: prevState.count + 1,
          };
        });
      }, 1000);
      
      this.setState(prevState => {
        return {
          ...prevState,
          intervalId: newIntervalId,
        };
      });
    };
    
    
  render() {
    return <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
       {this.state.show === true ? 
            <>
            <h1>{this.state.fullName}</h1>
            <h2>{this.state.bio}</h2>
            <img alt='' className='w-40' src={this.state.imgSrc}/>
            <h2>{this.state.profession}</h2>
            </>
            : 
            <></>}
     <div className="flex">
    <label class="inline-flex relative items-center mr-5 cursor-pointer">
        <input
            type="checkbox"
            className="sr-only peer"
            checked={this.state.show}
            readOnly
        /> 
        <div
            onClick={
              this.handleClick
            }
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
        ></div>
        <span className="ml-2 text-sm font-medium text-gray-900">
            {this.state.show === true ? "On" : "Off"}
        </span>
      
    </label>
  {this.state.count}
</div>
</div>
  }
 };

 export default App;