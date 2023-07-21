import React, { Component } from "react";

class part2 extends Component {
  render() {
    return (
      <section className="part2" id="blogs">
        <p className="TrendingPart">
          <span>Today's Trending Blogs</span>
          <span id="viewTrending">View all</span>
        </p>
        <div className="carousel">
          <span className="carouselPost postcarousel1">
            <section className="carouselImage"></section>
            <section className="carouselAbout">
              <p>
                <span>July 2 </span>
                <span>12 min</span>
              </p>
              <p>
                <span>- By Chirag Paliwal</span>
              </p>
            </section>
            <section className="carouselTitle">
              <span>
                Zayn Malik returns to Twitter, expresses gratitude to fans: 'I
                owe my life to you'
              </span>
            </section>
          </span>
          <span className="carouselPost postcarousel2">
            <section className="carouselImage"></section>
            <section className="carouselAbout">
              <p>
                <span>July 3 </span>
                <span>15 min</span>
              </p>
              <p>
                <span>- By Badal Chhipa</span>
              </p>
            </section>
            <section className="carouselTitle">
              <span>
                LG, Apple and Samsung are some of the best TVs on sale ahead of
                Amazon Prime Day
              </span>
            </section>
          </span>
          <span className="carouselPost postcarousel3">
            <section className="carouselImage"></section>
            <section className="carouselAbout">
              <p>
                <span>July 3 </span>
                <span>5 min</span>
              </p>
              <p>
                <span>- By Mukesh Ambani</span>
              </p>
            </section>
            <section className="carouselTitle">
              <span>
                Threads: Twitter threatens legal action over Meta's new app
              </span>
            </section>
          </span>
          <span className="carouselPost postcarousel4">
            <section className="carouselImage"></section>
            <section className="carouselAbout">
              <p>
                <span>July 4 </span>
                <span>10 min</span>
              </p>
              <p>
                <span>- By Elon Musk</span>
              </p>
            </section>
            <section className="carouselTitle">
              <span>
                Meet Scooter, the winner of this year's World's Ugliest Dog
                contest
              </span>
            </section>
          </span>
          <span className="carouselPost postcarousel5">
            <section className="carouselImage"></section>
            <section className="carouselAbout">
              <p>
                <span>July 5 </span>
                <span>6 min</span>
              </p>
              <p>
                <span>- By Neighbours</span>
              </p>
            </section>
            <section className="carouselTitle">
              <span>
                How Tom Cruise Trained for the 'Biggest Stunt in Cinema History'
              </span>
            </section>
          </span>
          <span className="carouselPost postcarousel6">
            <section className="carouselImage"></section>
            <section className="carouselAbout">
              <p>
                <span>July 5 </span>
                <span>16 min</span>
              </p>
              <p>
                <span>- By Narendra Modi</span>
              </p>
            </section>
            <section className="carouselTitle">
              <span>
                Netflix Teases ‘Stranger Things 5’ In Cryptic ‘The First Shadow’
                Tweet
              </span>
            </section>
          </span>
        </div>
      </section>
    );
  }
}

export default part2;
