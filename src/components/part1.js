import React, { Component } from "react";
import "../App.css";

class Part1 extends Component {
  render() {
    return (
      <>
        <span className="navBarBottomLine center">
          <hr />
        </span>
        <section className="part1">
          <div className="left center">
            <section className="post1 center">
              <div className="imageWithBottom center">
                <span className="post1Image"></span>
                <section className="Post1ImageBottom">
                  <div className="Post1Bottom">
                    <span>
                      <span>July 8</span>
                      <span>5 min read</span>
                    </span>
                    <span>
                      <span>- By Jatin Sharma</span>
                    </span>
                  </div>
                  <div className="Post1Title">
                    <span>
                      Salman Khan and Katrina Kaif begin dubbing for Tiger 3
                    </span>
                  </div>
                  <div className="Post1Desc">
                    <span>
                      The film is expected to release during Diwali this year.
                      Tiger 3 will also see Shah Rukh Khan in a cameo as
                      Pathaan. The film is expected to release in theatres on
                      November 10, That is 11 Days before Jatin's Birthday.
                    </span>
                  </div>
                </section>
              </div>
            </section>
          </div>
          <div className="right">
            <section className="post2">
              <p className="post2Image"></p>
              <div className="Post2Bottom">
                <span>
                  <span>March 21</span>
                  <span>15 min read</span>
                </span>
                <span>
                  <span>- By Shivam Chodary</span>
                </span>
              </div>
              <div className="title Post2Title">
                <span>
                  What Happens When One Partner Is Vaccinated and the Other
                  Isn't?
                </span>
              </div>
              <div className="Post2Desc">
                <span>
                  For the moment, many people are learning to balance happiness
                  about their partner's vaccine eligibility with personal
                  disappointment.
                </span>
              </div>
            </section>
            <section className="post3">
              <p className="post3Image"></p>
              <div className="Post3Bottom">
                <span>
                  <span>April 1</span>
                  <span>9 min read</span>
                </span>
                <span>
                  <span>- By Suresh Mishra</span>
                </span>
              </div>
              <div className="title Post3Title">
                <span>
                  These Intimate Portraits Celebrate the Beauty and Versatility
                  of Black Men's Hair
                </span>
              </div>
              <div className="Post3Desc">
                <span>
                  For the moment, many people are learning to balance happiness
                  about their partner's vaccine eligibility with personal
                  disappointment.
                </span>
              </div>
            </section>
          </div>
        </section>
      </>
    );
  }
}

export default Part1;
