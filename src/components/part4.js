import React, { Component } from "react";

class part4 extends Component {
  render() {
    return (
      <section className="part4" id="books">
        <p className="TrendingPart">
          <span>Best Sellers Of the Month</span>
          <span id="viewBooks">View all</span>
        </p>
        <div className="booksCarousel">
          <span className="book Book1">
            <section className="bookImage"></section>
            <section className="bookTitle">
              <span>In Search of Lost Time</span>
            </section>
            <section className="bookBy">
              <span>by Marcel Proust</span>
            </section>
            <section className="buyButton">
              Buy for <span className="bolder">$50.90</span>
            </section>
          </span>
          <span className="book Book2">
            <section className="bookImage"></section>
            <section className="bookTitle">
              <span>War and Peace </span>
            </section>
            <section className="bookBy">
              <span>by Leo Tolstoy</span>
            </section>
            <section className="buyButton">
              Buy for <span className="bolder">$35.50</span>
            </section>
          </span>
          <span className="book Book3">
            <section className="bookImage"></section>
            <section className="bookTitle">
              <span>Crime and Punishment </span>
            </section>
            <section className="bookBy">
              <span>By Fyodor Dostoyevsky</span>
            </section>
            <section className="buyButton">
              Buy for <span className="bolder">$65.25</span>
            </section>
          </span>
          <span className="book Book4">
            <section className="bookImage"></section>
            <section className="bookTitle">
              <span> Pride and Prejudice </span>
            </section>
            <section className="bookBy">
              <span>By Jane Austen</span>
            </section>
            <section className="buyButton">
              Buy for <span className="bolder">$40</span>
            </section>{" "}
          </span>
          <span className="book Book5">
            <section className="bookImage"></section>
            <section className="bookTitle">
              <span>Fourth Wing</span>
            </section>
            <section className="bookBy">
              <span>By Rebecca Yarros</span>
            </section>
            <section className="buyButton">
              Buy for <span className="bolder">$26.99</span>
            </section>{" "}
          </span>
          <span className="book Book6">
            <section className="bookImage"></section>
            <section className="bookTitle">
              <span> King of Greed </span>
            </section>
            <section className="bookBy">
              <span>By Ana Huang </span>
            </section>
            <section className="buyButton">
              Buy for <span className="bolder">$16.19</span>
            </section>{" "}
          </span>
          <span className="book Book7">
            <section className="bookImage"></section>
            <section className="bookTitle">
              <span> The Song of Achilles </span>
            </section>
            <section className="bookBy">
              <span>By Madeline Miller</span>
            </section>
            <section className="buyButton">
              Buy for <span className="bolder">$14.99</span>
            </section>{" "}
          </span>
          <span className="book Book8">
            <section className="bookImage"></section>
            <section className="bookTitle">
              <span> The Silent Patient </span>
            </section>
            <section className="bookBy">
              <span>By Alex Michaelides</span>
            </section>
            <section className="buyButton">
              Buy for <span className="bolder">$12.99</span>
            </section>{" "}
          </span>
          <span className="book Book9">
            <section className="bookImage"></section>
            <section className="bookTitle">
              <span> Anxious People </span>
            </section>
            <section className="bookBy">
              <span>By Fredrik Backman</span>
            </section>
            <section className="buyButton">
              Buy for <span className="bolder">$9.33</span>
            </section>{" "}
          </span>
          <span className="book Book10">
            <section className="bookImage"></section>
            <section className="bookTitle">
              <span> The Hobbit </span>
            </section>
            <section className="bookBy">
              <span>By J.R.R. Tolkien</span>
            </section>
            <section className="buyButton">
              Buy for <span className="bolder">$12.92</span>
            </section>
          </span>
        </div>
      </section>
    );
  }
}

export default part4;
