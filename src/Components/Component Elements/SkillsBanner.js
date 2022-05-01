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
        {
            name: "C#", 
            image: cSharp, 
            rating: <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>,
            accomplishments: "Designed the Sanpete Pantry Website and my Square Demo in C#"
        },
        {
            name: "Asp.Net", 
            image: AspNet, 
            rating: <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>,
            accomplishments: "Have used Asp.Net in all of my C# coding projects"
        }, 
        {
            name: "HTML5", 
            image: HTML5, 
            rating: <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>,
            accomplishments: "HTML5 is in all of my web applications and is the foundation of all web design."
        }, 
        {
            name: "CSS3", 
            image: CSS3, 
            rating: <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>,
            accomplishments: "Designed all my portfolio animations using CSS and I use it for my more customized designs"
        },
        {
            name: "SASS", 
            image: SASS, 
            rating: <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>,
            accomplishments: "The animated gradient background for my portfolio home page is all SASS and I use it for complex designs and animations when css isn't enough"
        }, 
        {
            name: "Bootstrap5", 
            image: Bootstrap5, 
            rating: <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>,
            accomplishments: "I use bootstrap in all of my web applications for my simple web layout and design"
        },
        {
            name: "Javascript", 
            image: Javascript, 
            rating: <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>,
            accomplishments: "I use Javascript to interact with the Square CDN libraries and for My Project Timeline"
        },
        {
            name: "ReactJS", 
            image: React, 
            rating: <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>,
            accomplishments: "My portfolio is made entirely with ReactJS"
        }, 
        {
            name: "PostgreSql", 
            image: PostgreSql, 
            rating: <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>,
            accomplishments: "This is the database I have used for all of my major web applications"
        }, 
        {
            name: "Xamarin.Forms", 
            image: XamarinForms, 
            rating: <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>,
            accomplishments: "I have designed Mobile Applications using Xamarin.Forms"
        },
        {
            name: "Docker", 
            image: Docker, 
            rating: <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>,
            accomplishments: "I use Docker for running many different applications and support features for my applications such as databases"
        }
     ]

    return (
        <div className="d-flex justify-content-center">
            <ul className="list-group list-group-horizontal">
                {skills.map(skill => 
                    <Skill key={skill.name} skill={skill} />
                )}
            </ul>
        </div>
    )
}

export default SkillsBanner;