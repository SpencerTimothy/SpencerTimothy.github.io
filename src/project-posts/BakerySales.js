import React from "react";
import { OnlyResumeButton } from "../components/OnlyResumeButton";
import Aside from "../components/Aside";
import "../CSS/writings.css";

const BakerySales = () => {
  return (
    <div className="writings-container">
      <Aside />
      <div className="writings">
        <h1>Sales Data Analysis</h1>
        <p>Data analysis using a bakery's sales database</p>
        <img
          style={{ width: "50rem" }}
          src="../photos/project_photos/bakerySales/Bakery Sales.png"
          alt="Tableau dashboard of bakery's sales analysis"
        />
        <figcaption>
          <i>Tableau Dashboard of a bakery's sales data analysis</i>
        </figcaption>
        <p
          style={{
            fontWeight: "500",
            textAlign: "center",
            marginBottom: ".25rem",
          }}
        >
          <i>
            To view the code for this project, please see my GitHub repository
            at this
            <a
              href="https://github.com/SpencerTimothy/Bakery-Sales/blob/main/BakeryDB.sql"
              target="_blank"
            >
              {" "}
              link
            </a>
          </i>
        </p>
        <p
          style={{
            fontWeight: "500",
            textAlign: "center",
            marginTop: ".25rem",
          }}
        >
          <i>
            To view my Tableau dashboard for this project, please visit this
            <a
              href="https://public.tableau.com/app/profile/spencer.timothy/viz/BakerySalesforOctober2007/Story1"
              target="_blank"
            >
              {" "}
              link
            </a>
          </i>
        </p>
        <h2>Introduction</h2>
        <p>
          This analysis utilizes data obtained from a fictional bakery database
          created by California Polytechnic State University, San Luis Obispo
          for a computer science course, CPE 365. The dataset was sourced
          online, and Cal Poly's README page for this database is available at
          the provided
          <a
            href="https://users.csc.calpoly.edu/~dekhtyar/365-Winter2022/data/BAKERY/README.BAKERY.TXT"
            target="_blank"
          >
            {" "}
            link
          </a>
          . The purpose of this study is to examine the sales data of a small
          bakery shop for a one-month period and investigate various aspects of
          customer behavior and preferences.
        </p>
        <p>
          The data consists of multiple tables that were merged using common
          columns to create insightful visualizations through Tableau software.
          The first page of the Tableau dashboard displays the visual analysis
          produced with SQL, while the second page illustrates the data analysis
          conducted solely with Tableau.
        </p>

        <h2>Analysis</h2>
        <p>
          SQL and Tableau were used to link the different tables in the database
          and create visual representations. The dataset includes information on
          known customers, the types of baked goods offered for sale, and the
          purchases made during the given timeframe. The four tables in the
          bakery sales database are:
        </p>
        <ul>
          <li>
            <strong>Customers</strong>: information about the bakery's customers
          </li>
          <li>
            <strong>Goods</strong>: information about the baked goods offered
          </li>
          <li>
            <strong>Items</strong>: itemized reciept infromation for purchases
          </li>
          <li>
            <strong>Receipts</strong>: general receipt information for purchases
          </li>
        </ul>
        <p>
          The analysis aimed to address several questions related to the
          bakery's sales, such as identifying the customers who spent the most
          money, the most popular flavors, the most popular food items, and the
          sales figures for each day. The database diagram shows the
          relationships between the various tables in the bakery's sales
          database. These tables were connected through shared columns like the
          customer's ID and the receipt number.
        </p>
        <img
          style={{ width: "45rem" }}
          src="../photos/project_photos/bakerySales/Database Diagram.png"
          alt="Database diagram"
        />
        <figcaption>
          <i>Database diagram for the bakery's sales</i>
        </figcaption>
        <p>
          The analysis of the data will explore various insights, including the
          top five customers who spent the most money, the most popular baked
          goods, and the highest-grossing sales days.
        </p>
        <h3>Best Selling Foods</h3>
        <p>
          Determining the best-selling food items is an important business
          objective that can provide valuable insights into customer preferences
          and demand. To this end, we aggregated the "goods" table by food and
          flavor to identify the most popular food items sold by the bakery.
        </p>
        <img
          style={{ width: "40rem" }}
          src="../photos/project_photos/bakerySales/Best Selling Food.png"
          alt="Best selling foods"
        />
        <figcaption>
          <i>Best selling foods</i>
        </figcaption>
        <p>
          Our analysis revealed that tarts were the best-selling food item, with
          a total of 10 items sold, followed by cookies and cake, both with 7
          items sold during the month. In contrast, bear claws, pies, and twists
          were the least popular food items, with only 1 item sold each during
          the same period.
        </p>
        <h3>Total Sales per Food</h3>
        <p>
          Another important business question that arises is how much revenue
          the bakery generates from its best-selling food items. To answer this
          question, we aggregated and summed the SQL query in Tableau to
          visualize the total sales for each food type.
        </p>
        <img
          style={{ width: "40rem" }}
          src="../photos/project_photos/bakerySales/Total Sales per Food.png"
          alt="Total sales per food item"
        />
        <figcaption>
          <i>Total sales per food item</i>
        </figcaption>
        <p>
          Our findings indicate that cake was the top-selling food item,
          generating $1,127 in sales during the month, followed by tarts with
          $529 and eclairs with $127. In contrast, the food items that
          contributed the least to revenue were twists with $21, bear claws with
          $37, and meringues with $41.
        </p>
        <h3>Best Selling Flavors</h3>
        <p>
          Determining the most popular flavors that a bakery sells is a crucial
          question for any bakery to answer, as it helps them make informed
          decisions about which flavors to keep in stock and which ones to
          produce more. To achieve this, we have aggregated the "goods" table to
          reflect the best selling flavors.
        </p>
        <img
          style={{ width: "40rem" }}
          src="../photos/project_photos/bakerySales/Best Selling Flavors.png"
          alt="Best selling flavors"
        />
        <figcaption>
          <i>Best selling flavors</i>
        </figcaption>
        <p>
          The analysis shows that chocolate is the most popular flavor, with 5
          food items being sold with chocolate flavor. The second and third most
          popular flavors that month were apple and almond, respectively, with 4
          items being sold for each flavor. The three least popular flavors were
          coffee, cherry, and cheese, with only 1 item sold with each flavor in
          that month.
        </p>
        <h3>Total Sales per Flavor</h3>
        <p>
          In addition to identifying the best selling flavors, it is also
          important for the bakery to know the revenue generated from each
          flavor. We used SQL to find the flavors and Tableau's visualizations
          to see the total sum of money sales from these flavors.
        </p>
        <img
          style={{ width: "40rem" }}
          src="../photos/project_photos/bakerySales/Total Sales per Flavor.png"
          alt="Total sales per flavors"
        />
        <figcaption>
          <i>Total sales per flavor</i>
        </figcaption>
        <p>
          The analysis shows that casino brings in the most revenue with
          $271.20, followed by opera with $239.30, and napoleon with $215.80.
          The lowest revenue flavors were walnut with $7.90, followed by
          gongolais with $9.20 and ganache with $10.40 for that month in
          October. This analysis can help the bakery make informed decisions
          about which flavors to focus on to maximize revenue.
        </p>
        <h3>Money Spent per Customer</h3>
        <p>
          To determine the best customers of the bakery, we analyzed the data to
          identify the customers who spent the most money during the month of
          October 2007. This information can be crucial for the bakery to
          identify its most valuable customers and tailor its marketing
          strategies accordingly. To achieve this, we aggregated the data from
          the "receipts" and "items" tables using SQL and then used Tableau to
          visualize the total amount spent by each customer.
        </p>
        <img
          style={{ width: "70rem" }}
          src="../photos/project_photos/bakerySales/Money Spent by Customer.png"
          alt="Money spent by customer"
        />
        <figcaption>
          <i>Money spent per Customer</i>
        </figcaption>
        <p>
          The analysis shows that the top three customers who spent the most
          money during October 2007 were Rupert Heling with $206.60, Josette
          Slingland with $190.40, and Sharron Toussand with $187.70 in
          purchases. By identifying these high-spending customers, the bakery
          can prioritize them in its customer retention efforts and offer them
          incentives to keep coming back.
        </p>
        <h3>Sales per Day</h3>
        <p>
          An analysis on the total sales per day for the month of October 2007
          was conducted to identify any trends in customer purchases that could
          inform the bakery's decision-making regarding product production and
          staffing.
        </p>
        <img
          style={{ width: "40rem" }}
          src="../photos/project_photos/bakerySales/Sales per Day.png"
          alt="Total sales per day"
        />
        <figcaption>
          <i>Total sales per day</i>
        </figcaption>
        <p>
          Based on the data, it does not appear that there is a clear trend in
          the sales for the month of October 2007. While there were more sales
          in the first half of the month, the overall trend is not significant.
          However, it is worth noting that the first day of the month had very
          low sales, which may have been due to it being the opening day of the
          bakery and not having an established customer base yet. The busiest
          day of the month had $169.9 in sales, while the slowest day had only
          $1.30 in sales.
        </p>
        <h2>Interactive Dashboard</h2>
        <p>
          The
          <a
            href="https://public.tableau.com/app/profile/spencer.timothy/viz/BakerySalesforOctober2007/Story1"
            target="_blank"
          >
            {" "}
            interactive dashboard{" "}
          </a>
          for this analysis was created using Tableau software and consists of
          two pages. The first page displays the visual analysis produced with
          SQL, while the second page illustrates the data analysis conducted
          solely with Tableau. The dashboard provides a comprehensive view of
          the bakery's sales data for the one-month period studied. It allows
          users to filter the data by customer, food item, flavor, and day of
          the week, enabling them to explore the data in a more interactive way.
          The dashboard is user-friendly and provides valuable insights into
          customer behavior and preferences that can inform the bakery's
          marketing and sales strategies.
        </p>
        <p>
          Furthermore, there is an additional chart provided in the Tableau
          dashboard that analyzes the total sum of money made by flavor and
          food. This chart is useful for identifying the most profitable flavor
          and food combinations, which can help guide future business decisions.
          With this chart, users can easily visualize and compare the revenue
          generated by each flavor and food type
        </p>
        <p>
          To view this dashboard and interact with the data and visualizations,
          it is recommended to use the full-screen mode. You can access the
          full-screen mode by looking for the square icon located at the bottom
          right side of the dashboard. Click on the icon to enter full-screen
          mode and explore the charts in greater detail.
        </p>
        <img
          src="../photos/project_photos/bakerySales/Bakery Full Screen.png"
          alt="Full screen mode"
        />
        <figcaption>
          <i>How to view in full screen</i>
        </figcaption>
        <p>
          To view the questions asked in this analysis, simply hover over the
          chart of interest and each bar will produce a tooltip to easily
          visualize the flavor, food, customer, or sales per day for each
          analysis. This will help visualize the analysis in an interactive way
          and help the reader have a more interesting experience interacting
          with the data and the analysis.
        </p>
        <p
          style={{
            fontWeight: "500",
            textAlign: "center",
            marginBottom: ".25rem",
          }}
        >
          <i>
            To view the code for this project, please see my GitHub repository
            at this
            <a
              href="https://github.com/SpencerTimothy/Bakery-Sales/blob/main/BakeryDB.sql"
              target="_blank"
            >
              {" "}
              link
            </a>
          </i>
        </p>
        <p
          style={{
            fontWeight: "500",
            textAlign: "center",
            marginTop: ".25rem",
          }}
        >
          <i>
            To view my Tableau dashboard for this project, please visit this
            <a
              href="https://public.tableau.com/app/profile/spencer.timothy/viz/BakerySalesforOctober2007/Story1"
              target="_blank"
            >
              {" "}
              link
            </a>
          </i>
        </p>
        <OnlyResumeButton />
      </div>
    </div>
  );
};

export default BakerySales;
