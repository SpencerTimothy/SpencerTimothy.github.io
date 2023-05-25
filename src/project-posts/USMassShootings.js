import React from "react";
import { OnlyResumeButton } from "../components/OnlyResumeButton";
import Aside from "../components/Aside";
import "../CSS/writings.css";

const USMassShootings = () => {
  return (
    <div className="writings-container">
      <Aside />
      <div className="writings">
        <h1>Mass Shootings in the United States</h1>
        <p>
          An analysis of mass shootings in the United States from 1982 - 2022
        </p>
        <img
          style={{ width: "60rem" }}
          src="../photos/project_photos/USMassShootings/U.S. Mass Shootings Map.png"
          alt="Geospacial Map of Mass Shootings in the U.S."
        />
        <figcaption>
          <i>Geospacial Map of Mass Shootings in the U.S.</i>
        </figcaption>
        <p style={{ fontWeight: "500", textAlign: "center" }}>
          <i>
            To view the code for this project, please see the Jupyter Notebook
            Viewer at this
            <a
              href="https://nbviewer.org/github/SpencerTimothy/Mass-Shootings-in-the-United-States/blob/main/U.S.%20Mass%20Shootings.ipynb"
              target="_blank"
            >
              {" "}
              link
            </a>
          </i>
        </p>
        <h2>Introduction</h2>
        <p>
          Mass shootings continue to be a prevalent public health issue in the
          United States. In recent years, there has been a growing interest in
          understanding the characteristics of mass shootings and identifying
          potential risk factors that may contribute to these events. To help
          shed light on this issue, this study aims to analyze data from the{" "}
          <a
            href="https://www.motherjones.com/politics/2012/12/mass-shootings-mother-jones-full-data/"
            target="_blank"
          >
            Mother Jones
          </a>{" "}
          mass shooting dataset, which covers the period from 1982 to 2022.
        </p>
        <p>
          The dataset contains details on different aspects of each mass
          shooting, such as the number of victims, incident location, and type
          of weapon employed. Notably, the Mother Jones dataset defines a mass
          shooting as an incident in which three or more people are killed.
          Nevertheless, it is worth noting that other sources may have slightly
          different definitions.
        </p>
        <p>
          Some of the questions that the analysis will address include the mean
          age of the shooters, the number of victims per year, the frequency and
          locations of shootings, whether there have been any trends in the
          locations of shootings over time, if there were any signs of mental
          health issues in the shooters, and the types of weapons used in these
          incidents. Additionally, a geospatial visualization of the dataset
          will be created to assist in a visual representation of the extent and
          distribution of mass shootings across the country. By mapping the
          location and number of victims in each incident, the visualization
          will provide a clear and detailed picture of the spatial patterns and
          trends of mass shootings.
        </p>
        <h2>Analysis</h2>
        <p>
          In this study, we will utilize several Python libraries, including
          Pandas for data analysis, Seaborn for creating visualizations, and
          Pydeck for interactive maps. Pandas is a widely used library for data
          manipulation and analysis, providing easy-to-use functions for
          filtering, grouping, and aggregating data. Seaborn, on the other hand,
          is a powerful data visualization library that provides a high-level
          interface for creating informative and aesthetically pleasing plots.
          Pydeck, a relatively new library, is used for creating interactive
          maps with 3D rendering capabilities. Together, these libraries provide
          the necessary tools for exploring and presenting insights from the
          mass shooting dataset.
        </p>
        <p>
          As with any data project using pre-existing datasets, missing data can
          pose a challenge in accurately analyzing the information. In the case
          of this analysis, multiple data points were found to be missing, such
          as the number of injured, the total amount of victims, the age of the
          shooters, and the precise location of the shootings in some instances.
          To address this issue, it was necessary to utilize a combination of
          methods, including sourcing additional data from various local and
          international news sources and making estimates in cases where
          definitive information was not available. For example, in the Tulsa
          medical center shooting in 2022, the number of people injured had to
          be estimated due to incomplete data. Additionally, to determine the
          longitude and latitude values for missing data, the researchers used
          Google to locate the site of each shooting and manually recorded the
          corresponding coordinates into the dataset. While this process can
          introduce some degree of uncertainty, it allowed for a more
          comprehensive analysis of the data available.
        </p>
        <p>
          For readers interested in the data cleaning and analysis methodology,
          it is recommended to refer to this{" "}
          <a
            href="https://nbviewer.org/github/SpencerTimothy/Mass-Shootings-in-the-United-States/blob/main/U.S.%20Mass%20Shootings.ipynb#sectionII"
            target="_blank"
          >
            GitHub repository
          </a>
          , which provides clear and organized documentation of the code and
          methodology employed.
        </p>
        <h3>Mean Age of Shooter</h3>
        <p>
          The distribution of ages among shooters in the mass shooting dataset
          from 1982 to 2022 was analyzed to gain a better understanding of the
          demographics of mass shooters in the United States.
        </p>
        <img
          style={{ width: "40rem" }}
          src="../photos/project_photos/USMassShootings/Mean Age of Shooter.png"
          alt="Distribution of age of shooters"
        />
        <figcaption>
          <i>Distribution of the age of shooters</i>
        </figcaption>
        <p>
          A visualization was created to display the age range of the shooters,
          with a red line indicating the mean age of the group. The graph shows
          that the majority of mass shooters in this dataset were in their 20s,
          with a mean age of 33.61 years.
        </p>
        <h3>Total Victims per Year</h3>
        <p>
          To visualize the data, a bar chart was created showing how many deaths
          were recorded for each incident per year. The graph shows the total
          number of victims each year from 1982 to 2022, with the x-axis
          representing each year and the y-axis representing the total number of
          victims. Each bar was labeled to show the exact number of victims for
          each year, and titles and labels were also included for clarity.
        </p>
        <img
          style={{ width: "40rem" }}
          src="../photos/project_photos/USMassShootings/Victims Per Year.png"
          alt="Number of victims per year"
        />
        <figcaption>
          <i>Number of Victims Each Year</i>
        </figcaption>
        <p>
          It is worth being noted that the number of total victims per year has
          been increasing since the mid-1990s. In 2017, there were a total of
          704 victims, the highest number recorded, mainly due to the Las Vegas
          massacre in which there were 604 victims. However, some years had no
          recorded mass shootings, such as 1983, 1985, and 2002.
        </p>
        <h3>Number of Shootings per Location by Year</h3>
        <p>
          A chart was created to show the number of mass shootings per year and
          their location type. The graph also includes a KDE (kernel density
          estimation) plot, which shows the trends in shooting locations over
          time. A separate chart was also created to display the number of
          shootings per location type.
        </p>
        <img
          style={{ width: "50rem" }}
          src="../photos/project_photos/USMassShootings/Shootings Per Year and Location of Shootings.png"
          alt=""
        />
        <figcaption>
          <i>Shootings Per Year and Location of Shootings</i>
        </figcaption>
        <p>
          The KDE plot reveals that shootings in the workplace have been a
          consistent and prevalent location for mass shootings over the years.
          In fact, they have often been the most common location for such
          incidents. Locations labeled "other" are also frequently reported for
          mass shootings. However, shootings in the workplace have consistently
          been a popular location for mass shootings.
        </p>
        <img
          style={{ width: "40rem" }}
          src="../photos/project_photos/USMassShootings/Number of Shootings by Location Type.png"
          alt="Number of shootings by location type"
        />
        <figcaption>
          <i>Number of Shootings by Location Type</i>
        </figcaption>
        <p>
          The chart above provides a breakdown of shootings based on location
          type, highlighting that workplaces and schools are frequent targets of
          mass shootings. Specifically, the data shows that workplaces have
          experienced the highest number of shootings, with 50 incidents,
          followed by schools with 20, and then "religious" sites with 8. The
          category labeled "other", which encompasses various locations not
          captured in the listed categories (such as parks, commercial
          properties, and bars/nightclubs), has the most mass shootings,
          totaling 52 incidents.
        </p>
        <h3>Prior Signs of Mental Health Issues</h3>
        <p>
          The following chart includes some values that were originally labeled
          as "Unclear" and "-". These labels were changed to "Unknown" during
          the data cleaning process to ensure consistency in the analysis.
          Additionally, there are "Tbd" values in the chart, which indicate that
          it has not been publicly disclosed whether there were prior signs of
          mental health issues. These values are primarily associated with more
          recent mass shootings.
        </p>
        <img
          style={{ width: "40rem" }}
          src="../photos/project_photos/USMassShootings/Prior Signs of Mental Health Issues.png"
          alt="Prior Signs of Mental Health Issues"
        />
        <figcaption>
          <i>Prior Signs of Mental Health Issues</i>
        </figcaption>
        <p>
          The bar plot suggests that a considerable portion of mass shooters
          exhibited early indications of mental health problems. Nevertheless,
          it is critical to note that a significant number of cases contained
          "unknown" or "unclear" details about the shooter's mental health
          background. This may imply that further research and data collection
          are necessary to better comprehend the link between mental health and
          mass shootings
        </p>
        <h3>Most Common Weapon Type</h3>
        <p>
          The following chart summarizes the weapon types used in mass
          shootings, after cleaning and simplifying the original data. The
          categories of "rifle" and "handgun" were originally classified under
          various names, such as "semi-automatic rifle", "semiautomatic rifle",
          "long gun", "semiautomatic handgun", "handguns", "revolver", and so
          on. To simplify the analysis, these categories were collapsed into
          three broad categories: "Rifle", "Handgun", and "Shotgun". Many of the
          mass shootings involved multiple weapon types, so they are categorized
          as "Handgun, Rifle", "Shotgun, Handgun", and so on. Although the
          weapon types were often not specified in detail, it is worth noting
          that both handguns and rifles were frequently categorized as
          "Semiautomatic".
        </p>
        <img
          style={{ width: "45rem" }}
          src="../photos/project_photos/USMassShootings/Types of Weapons Used.png"
          alt=""
        />
        <figcaption>
          <i>Most common weapon types</i>
        </figcaption>
        <p>
          The preceding chart analyzing weapon type usage in mass shootings in
          the United States highlights that "Handgun" was the most frequently
          used weapon, followed by a combination of "Handgun" and "Rifle". The
          use of just a "Rifle" was the third most commonly used weapon in these
          incidents. It is important to note that weapon types were often
          broadly categorized, such as "Semiautomatic Handgun" or "Semiautomatic
          Rifle", and there was no further research on the specific model or
          type of weapon used in each case.
        </p>
        <h2>Visualizing Mass Shootings</h2>
        <p>
          To visually represent the data on mass shootings in the United States,
          an interactive geospatial library called Pydeck was used to create a
          comprehensive chart that plots all shootings from 1982 to 2022. The
          chart is a useful tool for gaining insights into the geographic
          distribution of these incidents and visualizing the areas that have
          been impacted by mass shootings.
        </p>
        <p>
          The interactive map presented below visualizes the location and
          magnitude of all mass shootings that have occurred in the United
          States from 1982 to 2022. The map is designed to provide a
          comprehensive overview of the distribution of these incidents across
          the country. Each column on the map represents a single shooting, with
          the height and color of the column indicating the number of victims in
          each incident.
        </p>
        <p>
          As you move your mouse over each column, a tooltip will appear with
          detailed information about the shooting. This includes the city and
          state where the incident occurred, the date it took place, and the
          total number of victims. This information provides a deeper
          understanding of the impact of these tragic events on communities
          across the United States.
        </p>
        <p>To interact with this map, the following actions are available:</p>
        <ul>
          <li>
            <strong>Zoom</strong>: The map can be zoomed in and out by double
            clicking, double tapping with a touchpad, or by using the{" "}
            <kbd>+</kbd> and <kbd>-</kbd> keys on the keyboard.
          </li>
          <li>
            <strong>Pan</strong>: The map can be panned (moved horizontally or
            vertically) by clicking and dragging the map with a mouse or using a
            one-finger drag gesture on a touchpad.
          </li>
          <li>
            <strong>Pitch & Bearing</strong>: The pitch (the angle at which the
            map is tilted) and/or the bearing (the direction in which the map is
            rotated) of the map can be changed by clicking and dragging the
            cursor while holding the <kbd>Ctrl</kbd> + the left mouse button and
            moving the cursor up/down (pitch) or left/right (bearing), or by
            holding the right mouse button and moving the cursor up/down or
            left/right.
          </li>
        </ul>
        <iframe
          style={{ width: "70rem" }}
          src="../project_HTML/mass_shootings_column_layer.html"
          frameborder="5"
          name="Mass Shootings Interactive Map"
        ></iframe>
        <figcaption>
          <i>Interactive map of mass shootings</i>
        </figcaption>
        <h2>Conclusion</h2>
        <p>
          In summary, the study reveals that mass shootings in the United States
          have been occurring since 1982 and continue to be a matter of concern
          for public health. The analysis shows that shooters in this dataset
          had a mean age of 33.61 years, with a majority being in their 20s.
          Over time, both the number of victims and mass shootings have
          increased, with the highest number of victims occurring in 2017 and
          the highest number of mass shootings occurring in 2022. The incidents
          predominantly took place in workplaces and schools, with a smaller
          number taking place at religious institutions and other public places.
          The data suggests that many shooters had prior indications of mental
          health issues, and the majority of them used handguns as their primary
          weapon.
        </p>
        <p>
          There were many additional questions addressed in the original
          analysis posted on GitHub. If the reader is interested in exploring
          these questions and the code used to analyze the data, I recommend
          viewing the analysis in the Notebook Viewer at the following
          <a
            href="https://nbviewer.org/github/SpencerTimothy/Mass-Shootings-in-the-United-States/blob/main/U.S.%20Mass%20Shootings.ipynb"
            target="_blank"
          >
            {" "}
            link
          </a>
          .
        </p>
        <OnlyResumeButton />
      </div>
    </div>
  );
};

export default USMassShootings;
