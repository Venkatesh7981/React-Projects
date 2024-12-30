import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
  articles = [
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Mike Valerio, Yoonjung Seo, Gawon Bae, Alex Stambaugh",
    "title": "Sobbing and prayers echo through South Korean airport as families mourn air crash victims - CNN",
    "description": "The sounds of sobbing, prayers and anguish echoed through the departures hall of an airport in southwestern South Korea on Monday as families of the victims aboard a passenger jet that crash landed over the weekend waited for their loved ones to be identified.",
    "url": "https://www.cnn.com/2024/12/30/asia/south-korea-plane-crash-victims-families-intl-hnk/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/01-gettyimages-2191119161-jpg.JPG?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-12-30T08:11:00Z",
    "content": "Muan County, South KoreaCNN\r\n  — \r\nThe sounds of sobbing, prayers and anguish echoed through the departures hall of an airport in southwestern South Korea on Monday as families of the victims killed … [+6752 chars]"
    },
   
    {
    "source": {
    "id": "espn",
    "name": "ESPN"
    },
    "author": "John Keim",
    "title": "'He just willed it': Daniels has Wash. playoff-bound - ESPN",
    "description": "\"I'm tired. But I'm happy,\" Commanders rookie QB Jayden Daniels said after his 2-yard TD pass to Zach Ertz in overtime gave Washington a 30-24 win over Atlanta and clinched the franchise's first playoff spot since 2020.",
    "url": "https://www.espn.com/nfl/story/_/id/43219668/commanders-clinch-playoff-spot-jayden-daniels-stars-again-ot-win-vs-falcons",
    "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1230%2Fr1433188_1296x729_16%2D9.jpg",
    "publishedAt": "2024-12-30T07:29:00Z",
    "content": "LANDOVER, Md. -- As Washington Commanders quarterback Jayden Daniels, still wearing his burgundy uniform, sat down at a table for his postgame news conference, he smiled and said something that shoul… [+5097 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Variety"
    },
    "author": "Carmel Dagan",
    "title": "Linda Lavin, Star of TV’s ‘Alice’ and a Tony Winner, Dies at 87 - Variety",
    "description": "Linda Lavin, star of the 1970s sitcom 'Alice' and a Tony winner who remained active in TV and on stage into her 80s, died Sunday. She was 87.",
    "url": "https://variety.com/2024/tv/news/linda-lavin-dead-alice-tony-winner-1236261740/",
    "urlToImage": "https://variety.com/wp-content/uploads/2024/12/GettyImages-2187674771-e1735538942756.jpg?w=1000&h=563&crop=1",
    "publishedAt": "2024-12-30T06:19:00Z",
    "content": "Linda Lavin, star of CBS’ long-running sitcom “Alice” and a Tony winner for Neil Simon’s play “Broadway Bound” who remained active in TV and on stage, died Sunday. She was 87.\r\nA representative for L… [+8239 chars]"
    },
    {
    "source": {
    "id": "axios",
    "name": "Axios"
    },
    "author": "Russell Contreras",
    "title": "Fatal beating of Black inmate in New York draws probes, outrage - Axios",
    "description": "Body cam footage shows correction officers attacking Robert Brooks.",
    "url": "https://www.axios.com/2024/12/30/robert-brooks-death-new-york-prison-death",
    "urlToImage": "https://images.axios.com/aL1kHiRIBkndf9crqveaQqvowpE=/0x0:4358x2451/1366x768/2024/12/30/1735535770701.png",
    "publishedAt": "2024-12-30T05:45:49Z",
    "content": "The fatal beating of a Black man by white corrections officers at an upstate New York prison that was caught on body cam video has sparked anger, investigations and planned protests.\r\nThe big picture… [+2756 chars]"
    },
   
    ]
  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles: this.articles,
      loading: false
    };
  }
   async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=60352f91498743a2a432af1d09600a19";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
  }
  
  render() {
    return (
            <div className='container my-3'>
             <h2> NewsMonkey Top HeadLines</h2>
      
              <div className="row">
              {  this.state.articles.map((element)=>{
                return  <div className="col-md-4">
                <Newsitem  title={element.title? element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
             
               })
              }
               </div>
      </div>
    );
  }
}

export default News;