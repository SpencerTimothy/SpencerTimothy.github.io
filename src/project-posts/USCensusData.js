import React from "react";
import { OnlyResumeButton } from "../components/OnlyResumeButton";
import Aside from "../components/Aside";
import "../CSS/writings.css";

const USCensusData = () => {
  return (
    <div className="writings-container">
      <Aside />
    <div className="writings">
      <h1>U.S. Census Data</h1>
      <p>Census data for income and population from 2015 to 2017</p>
      <img
        style={{ width: "50rem" }}
        src="../photos/project_photos/USCensusData/U.S. Census Data.png"
        alt="U.S. Census data for 2015 - 2017"
      />
      <figcaption>
        <i>Tableau dashboard for U.S. Census Data from 2015 - 2017</i>
      </figcaption>
      <p
        style={{
          fontWeight: "500",
          textAlign: "center",
          marginBottom: ".25rem",
        }}
      >
        <i>
          To view the code for this project, please see my GitHub repository at
          this
          <a
            href="https://github.com/SpencerTimothy/Census-Data-2015-2017/blob/main/CensusData_2015-2017.sql"
            target="_blank"
          >
            {" "}link
          </a>
        </i>
      </p>
      <p
        style={{ fontWeight: "500", textAlign: "center", marginTop: ".25rem" }}
      >
        <i>
          To view my Tableau dashboard for this project, please see this
          <a
            href="https://public.tableau.com/views/ChangeinIncomeChangeinPopulation2015-2017/Story1?:language=en-US&:display_count=n&:origin=viz_share_link"
            target="_blank"
          >
            {" "}link
          </a>
        </i>
      </p>
      <h2>Introduction</h2>
      <p>
        In this project, Census Data from the United States for 2015 to 2017
        will be analyzed using SQL, and a visualization will be created with the
        data in Tableau. The percent change in average median household income
        and total average change in income per state will be analyzed, followed
        by an analysis of the percent change in population and the total change
        in population per state for these time periods.
      </p>
      <p>
        In the interactive dashboard in Tableau, all 52 states and territories
        of the United States can be visualized. Two pages will be provided in
        the visualization, one to visualize the change in median household
        income and another to visualize the change in population for each state.
      </p>
      <p>
        The data that is being used is divided into two categories for each
        year, the "2015/2017 Census County Data" and the "2015/2017 Census Tract
        Data." For the purpose of this analysis, the Census county data will be
        used.
      </p>
      <h2>Analysis</h2>
      <p>
        The dataset is combined with the statistics for each county. For the
        purpose of this analysis, the "Income" column, which is the median
        household income per county, and the "TotalPop" column, which is the
        total population for each county, will be used. It is important to note
        that this dataset does not include the median household income for each
        state and territory. It only includes the median household income for
        each county. Therefore, the average median household income for each
        state and territory was computed.
      </p>
      <h3>Average Change in Median Income</h3>
      <p>
        The average change in median household income for each state and
        territory from 2015 to 2017 will be found by calculating the average
        median household income of each state and territory in 2017 and
        subtracting it from the average median household income of each state
        and territory in 2015.
      </p>
      <img
        style={{ width: "50rem" }}
        src="../photos/project_photos/USCensusData/Tot Change in Income.png"
        alt="Largest and smallest percent changes in average median income"
      />
      <figcaption>
        <i>Largest and smallest percent changes in average median income</i>
      </figcaption>
      <p>
        The biggest changes in average median household income were made by:
      </p>
      <ol>
        <li>
          <strong>District of Columbia</strong>: $6,801.00
        </li>
        <li>
          <strong>Massachusetts</strong>: $5,056.29
        </li>
        <li>
          <strong>California</strong>: $5,033.60
        </li>
        <li>
          <strong>Utah</strong>: $4,521.72
        </li>
        <li>
          <strong>New Hampshire</strong>: $4,253.00
        </li>
      </ol>
      <p>
        The smallest changes in average median household income were made by:
      </p>
      <ol reversed start="52">
        <li>
          <strong>Puerto Rico</strong>: $492.64
        </li>
        <li>
          <strong>New Mexico</strong>: $1,013.55
        </li>
        <li>
          <strong>Louisiana</strong>: $1,242.30
        </li>
        <li>
          <strong>Wyoming</strong>: $2,022.91
        </li>
        <li>
          <strong>Mississippi</strong>: $2,079.79
        </li>
      </ol>
      <h3>Percent Change in Average Median Income</h3>
      <p>
        To find the percent change in average median income from 2015 to 2017,
        the change in income from 2017 to 2015 will be divided by the initial
        average income value, which is from 2015. This will show how much a
        median household income grew in 2017 relative to what it was in 2015.
      </p>
      <img
        style={{ width: "50rem" }}
        src="../photos/project_photos/USCensusData/Pct Change in Income.png"
        alt="Largest and smallest percent changes in average median income"
      />
      <figcaption>
        <i>Largest and smallest percent changes in average median income</i>
      </figcaption>
      <p>
        The biggest relative changes in income in all 52 states and territories
        in this dataset of the United States are:
      </p>
      <ol>
        <li>
          <strong>District of Columbia</strong>: 9.6%
        </li>
        <li>
          <strong>California</strong>: 8.99%
        </li>
        <li>
          <strong>Utah</strong>: 8.27%
        </li>
        <li>
          <strong>Washington</strong>: 7.76%
        </li>
        <li>
          <strong>Maine</strong>: 7.67%
        </li>
      </ol>
      <p>
        The smallest relative changes in income in all 52 states and territories
        in this dataset of the United States are:
      </p>
      <ol reversed start="52">
        <li>
          <strong>New Mexico</strong>: 2.52%
        </li>
        <li>
          <strong>Puerto Rico</strong>: 2.75%
        </li>
        <li>
          <strong>Louisiana</strong>: 3.0%
        </li>
        <li>
          <strong>Alaska</strong>: 3.47%
        </li>
        <li>
          <strong>Wyoming</strong>: 3.55%
        </li>
      </ol>
      <h3>Change in population</h3>
      <p>
        Similar to the average median income examples above, to find the change
        in population, it is necessary to find the difference between the
        population statistics from 2017 and 2015. In this visualization, a
        logarithmic scale was used to accurately visualize the population
        differences, as some of the population differences were extreme.
      </p>
      <img
        style={{ width: "50rem" }}
        src="../photos/project_photos/USCensusData/Tot Change in Population.png"
        alt="Largest and smallest total change in population"
      />
      <figcaption>
        <i>Largest and smallest total change in population</i>
      </figcaption>
      <p>The states/territories with the biggest population increases were:</p>
      <ol>
        <li>
          <strong>Texas</strong>: 880,998
        </li>
        <li>
          <strong>Florida</strong>: 632,765
        </li>
        <li>
          <strong>California</strong>: 561,383
        </li>
        <li>
          <strong>North Carolina</strong>: 207,231
        </li>
        <li>
          <strong>Georgia</strong>: 194,942
        </li>
      </ol>
      <p>The only states/territories to lose population were:</p>
      <ol reversed start="52">
        <li>
          <strong>Puerto Rico</strong>: -114,110
        </li>
        <li>
          <strong>Illinois</strong>: -19,235
        </li>
        <li>
          <strong>West Virginia</strong>: -14,577
        </li>
        <li>
          <strong>Vermont</strong>: -1,968
        </li>
        <li>
          <strong>Mississippi</strong>: -1,861
        </li>
      </ol>
      <h3>Percent Change in Population</h3>
      <p>
        To find the percent change in population from 2015 to 2017, the change
        in population from 2017 to 2015 will be divided by the initial
        population value, which is from 2015. This will show how much the
        population grew in 2017 relative to what it was in 2015.
      </p>
      <img
        style={{ width: "50rem" }}
        src="../photos/project_photos/USCensusData/Pct Change in Population.png"
        alt="Largest and smallest percent change in population"
      />
      <figcaption>
        <i>Largest and smallest percent change in population</i>
      </figcaption>
      <p>
        The states/territories with the biggest relative population increases
        were:
      </p>
      <ol>
        <li>
          <strong>District of Columbia</strong>: 3.85%
        </li>
        <li>
          <strong>Texas</strong>: 3.32%
        </li>
        <li>
          <strong>North Dakota</strong>: 3.3%
        </li>
        <li>
          <strong>Florida</strong>: 3.22%
        </li>
        <li>
          <strong>Nevada</strong>: 3.18%
        </li>
      </ol>
      <p>
        The states/territories with the smallest relative population increases
        were:
      </p>
      <ol reversed start="52">
        <li>
          <strong>Puerto Rico</strong>: -3.19%
        </li>
        <li>
          <strong>West Verginia</strong>: -0.79%
        </li>
        <li>
          <strong>Vermont</strong>: -0.31%
        </li>
        <li>
          <strong>Illinois</strong>: -0.15%
        </li>
        <li>
          <strong>Mississippi</strong>: -0.062%
        </li>
      </ol>
      <h2>Interactive Dashboard</h2>
      <p>
        For readers that would like to view the
        <a
          href="https://public.tableau.com/views/ChangeinIncomeChangeinPopulation2015-2017/Story1?:language=en-US&:display_count=n&:origin=viz_share_link"
          target="_blank"
        >
          {" "}interactive Tableau dashboard{" "}
        </a>
        to explore the changes in income and population across all 52 states and
        territories of the United States from 2015 to 2017, it is recommended
        viewing the dashboard in full screen mode, which you can find at the
        bottom right side of the visualization. Once you're in the dashboard,
        you'll see two tabs that you can click on to switch between changes in
        income and changes in population.
      </p>
      <img
        src="../photos/project_photos/USCensusData/Census Full Screen.png"
        alt="How to view in full screen"
      />
      <figcaption>
        <i>How to view in full screen</i>
      </figcaption>
      <p>
        To view the income or population change for each state, simply hover
        over the state of interest and the percent change in income or
        population for that state will be displayed. The states are color-coded
        according to the extent of their change, with the states that have
        experienced the biggest increases in income or population appearing in
        red and those with the smallest changes in white.
      </p>
      <p>
        At the bottom of each chart, a bar chart is provided to show the total
        change in income or population for each state and territory in the
        dataset. This provides an easy way to compare the relative changes
        across states and territories.
      </p>
      <p
        style={{
          fontWeight: "500",
          textAlign: "center",
          marginBottom: ".25rem",
        }}
      >
        <i>
          To view the code for this project, please see my GitHub repository at
          this
          <a
            href="https://github.com/SpencerTimothy/Census-Data-2015-2017/blob/main/CensusData_2015-2017.sql"
            target="_blank"
          >
            {" "}link
          </a>
        </i>
      </p>
      <p
        style={{ fontWeight: "500", textAlign: "center", marginTop: ".25rem" }}
      >
        <i>
          To view the Tableau dashboard for this project, please see this
          <a
            href="https://public.tableau.com/views/ChangeinIncomeChangeinPopulation2015-2017/Story1?:language=en-US&:display_count=n&:origin=viz_share_link"
            target="_blank"
          >
            {" "}link
          </a>
        </i>
      </p>
      <OnlyResumeButton />
    </div>
    </div>
  );
};

export default USCensusData;
