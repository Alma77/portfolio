import cSharp from '../../Images/cSharp.png'
import AspNet from '../../Images/aspNet.png'
import HTML5 from '../../Images/html5.png'
import CSS3 from '../../Images/css3.png'
import SASS from '../../Images/sass.png'
import Bootstrap5 from '../../Images/bootstrap.png'
import Javascript from '../../Images/javascript.png'
import React from '../../Images/react.png'
import PostgreSql from '../../Images/postgresql.png'
import XamarinForms from '../../Images/xamarinForms.png'
import Skill from './Skill'
import Docker from '../../Images/docker.png'

const SkillsBanner = () => {
    
    const skills = [
        {name: "C#", image: cSharp, rating: <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>, accomplishments: ""},
        {name: "Asp.Net", image: AspNet, rating: <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>, accomplishments: ""}, 
        {name: "HTML5", image: HTML5, rating: <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>, accomplishments: ""}, 
        {name: "CSS3", image: CSS3, rating: <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>, accomplishments: ""},
        {name: "SASS", image: SASS, rating: <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>, acomplishments: ""}, 
        {name: "Bootstrap5", image: Bootstrap5, rating: <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>, accomplishments: ""},
        {name: "Javascript", image: Javascript, rating: <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>, accomplishments: ""},
        {name: "ReactJS", image: React, rating: <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>, accomplishments: ""}, 
        {name: "PostgreSql", image: PostgreSql, rating: <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>, accomplishments: ""}, 
        {name: "Xamarin.Forms", image: XamarinForms, rating: <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>, accomplishments: ""},
        {name: "Docker", image: Docker, rating: <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>, accomplishments: ""}
     ]

    return (
        <div className="d-flex justify-content-center">
            `<ul className="list-group list-group-horizontal">
                {skills.map(skill => 
                    <Skill skill={skill} />
                )}
            </ul>
        </div>
    )
}

export default SkillsBanner;