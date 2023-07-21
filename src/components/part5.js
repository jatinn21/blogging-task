import React, { Component } from "react";

class part5 extends Component {
  render() {
    return (
      <section className="part5" id="podcasts">
        <p className="TrendingPart">
          <span>The Latest Podcasts</span>
          <span id="viewPodcasts">View all</span>
        </p>
        <section className="Podcasts">
          <div className="Podcast Podcast1">
            <span className="Podcast_Image"></span>
            <span className="Podcast_Details">
              <p className="podcast_Speaker">- By Rachel Green</p>
              <p className="podcast_Title">
                How are the boundaries between masculine and feminine being
                erased in fashion?
              </p>
              <p className="podcast_Desc">
                Today, you will not surprise anyone with pale pink shades of
                clothing in the men's department. Men in dresses appear on the
                red carpets, and big brands like Chanel are launching lines of
                men's makeup.
              </p>
            </span>
          </div>
          <div className="Podcast Podcast2">
            <span className="Podcast_Image"></span>
            <span className="Podcast_Details">
              <p className="podcast_Speaker">
                - By Serial Productions & The New York Times
              </p>
              <p className="podcast_Title">The Retrievals</p>
              <p className="podcast_Desc">
                Dozens of women seeking to become mothers came to a fertility
                clinic at Yale. A (five-part) narrative series about the
                shocking events that unfolded there. From Serial Productions and
                The New York Times.
              </p>
            </span>
          </div>
          <div className="Podcast Podcast3">
            <span className="Podcast_Image"></span>
            <span className="Podcast_Details">
              <p className="podcast_Speaker">
                - By Jason Bateman, Sean Hayes, Will Arnett
              </p>
              <p className="podcast_Title">SmartLess</p>
              <p className="podcast_Desc">
                "SmartLess" with Jason Bateman, Sean Hayes, & Will Arnett is a
                podcast that connects and unites people from all walks of life
                to learn about shared experiences through thoughtful dialogue
                and organic hilarity. A nice surprise: in each episode of
                SmartLess, one of the hosts reveals his mystery guest to the
                other two. What ensues is a genuinely improvised and authentic
                conversation filled with laughter and newfound knowledge to feed
                the SmartLess mind.
              </p>
            </span>
          </div>
          <div className="Podcast Podcast4">
            <span className="Podcast_Image"></span>
            <span className="Podcast_Details">
              <p className="podcast_Speaker">- By iHeartPodcasts</p>
              <p className="podcast_Title">Stuff They Don't Want You To Know</p>
              <p className="podcast_Desc">
                From UFOs to psychic powers and government conspiracies, history
                is riddled with unexplained events. You can turn back now or
                learn the Stuff They Don't Want You To Know ... an audio podcast
                from iHeartRadio.
              </p>
            </span>
          </div>
        </section>
      </section>
    );
  }
}

export default part5;
