import React, {Component} from "react";

const TITLES = [
    "I am a Software Engineer",
    "I am a writer",
    "I am a music lover"
];

class Title extends Component{
    state = { titleIndex : 0, fadeIn : true};

    componentDidMount(){
        this.animateTimeout = setTimeout(()=> this.setState({fadeIn: false}),2000);
        this.animateTitle();
    }

    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.animateTimeout);
    }

    animateTitle = ()=>{
        this.titleInterval = setInterval(()=>{
            const indx = (this.state.titleIndex + 1) % (TITLES.length);
            this.setState({titleIndex: indx, fadeIn: true});
            this.animateTimeout = setTimeout(()=> this.setState({fadeIn: false}),2000);
        }, 4000)
    }

    render(){
        const {titleIndex, fadeIn} = this.state; 
        const title = TITLES[titleIndex];
        return(
            <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>{title}</p>
        );
    }
}

export default Title;