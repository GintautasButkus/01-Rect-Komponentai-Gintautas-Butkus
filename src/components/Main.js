import React from "react";
import Card from "./Card";
import {v4 as uuidv4} from 'uuid'

export default function Main() {
      let data = [
        {
          text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          time: "9 mins"
        },
        {
          text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          time: "10 mins"
        },
        {
          text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          time: "11 mins"
        },
        {
          text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          time: "12 mins"
        },
        {
          text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          time: "13 mins"
        },
        {
          text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          time: "14 mins"
        },
        {
          text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          time: "15 mins"
        },
        {
          text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          time: "16 mins"
        },
        {
          text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          time: "17 mins"
        }
      ];

      let list = data.map(item => {
        return <Card key={uuidv4()} cardText={item.text} cardTime={item.time} />
      })

      return(
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {list}
            </div>
          </div>
        </div>
      )
  };
