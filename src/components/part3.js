import React, { Component } from "react";

class part3 extends Component {
  render() {
    return (
      <section class="part3" id="articles">
        <div class="LatestPart">
          <span>The Latest Articles</span>
          <span id="viewArticles">View all</span>
        </div>
        <section class="Articles">
          <div class="Article">
            <span class="Article_Image"></span>
            <span class="Article_Details">
              <p class="article_Author">- By Ross Geller</p>
              <p class="article_Title">
                Scientists Shocked to Discover that Earth's Pigeons are Actually
                Undercover Spie
              </p>
              <p class="article_Desc">
                Prepare for a feathered surprise as scientists uncover the truth
                about city pigeons. These innocent-looking birds are actually
                undercover spies equipped with hidden gadgets. They silently
                observe our every move, turning ordinary streets into a covert
                battleground of espionage.
              </p>
            </span>
          </div>
          <div class="Article">
            <span class="Article_Image"></span>
            <span class="Article_Details">
              <p class="article_Author">- By Nickelodeon</p>
              <p class="article_Title">
                Dora the Explorer: Lost in a Shopping Mall
              </p>
              <p class="article_Desc">
                Dora, the adventurous young explorer, finds herself in a pickle
                when she gets separated from Boots at a gigantic shopping mall.
                Armed with her trusty map and backpack, she embarks on a mission
                to reunite with her monkey friend while navigating through
                sales, escalators, and the elusive food court. Will Dora
                overcome the ultimate challenge of finding Boots in a sea of
                bargain hunters?
              </p>
            </span>
          </div>
          <div class="Article">
            <span class="Article_Image"></span>
            <span class="Article_Details">
              <p class="article_Author">- By Ranveer Allahbadia</p>
              <p class="article_Title">A Guide to Procrastinating Like a Pro</p>
              <p class="article_Desc">
                Adulting can be tough, and sometimes the best solution is to
                procrastinate with style. In this hilarious guide, we'll teach
                you the art of putting off responsibilities like a true master.
                From perfecting the art of binge-watching to becoming an expert
                in creative excuses, you'll discover the secrets to avoiding
                adult responsibilities and embracing your inner child. Remember,
                why do today what you can do… never?
              </p>
            </span>
          </div>
        </section>
      </section>
    );
  }
}

export default part3;
