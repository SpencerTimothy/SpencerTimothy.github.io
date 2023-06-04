import React from "react";
import Aside from "../components/Aside";
import { OnlyResumeButton } from "../components/OnlyResumeButton";
import "../CSS/writings.css";

const ModernPortfolioTheory = () => {
  return (
    <div className="writings-container">
      <Aside />
      <div className="writings">
        <h1>Modern Portfolio Theory</h1>
        <p>Constructing an optimal portfolio</p>
        <img
          src="../photos/project_photos/modernPortfolioTheory/Markowitz Bullet.png"
          alt="Markowitz Bullet"
        />
        <figcaption>
          <i>Markowitz Bullet</i>
        </figcaption>
        <p style={{ fontWeight: "500", textAlign: "center" }}>
          <i>
            To view the code for this project, please visit this{" "}
            <a
              href="https://nbviewer.org/github/SpencerTimothy/Modern-Portfolio-Theory-Portfolio-Analysis-/blob/main/MPT%20Project.ipynb"
              target="_blank"
            >
              link
            </a>
          </i>
        </p>
        <h2>Introduction</h2>
        <p>
          In today's world, investors have access to a vast array of financial
          instruments and investment strategies. However, with so many options
          available, it can be challenging determine which investments will
          provide the best return for a given level of risk. That's where Modern
          Portfolio Theory comes in. MPT provides a framework for constructing
          portfolios that balance risk and return, and has been widely used in
          the investment community for decades.
        </p>
        <p>
          Modern Portfolio Theory (MPT) is an investment theory that was
          developed by Harry Markowitz in 1952. MPT aims to maximize the return
          of a portfolio of assets while minimizing its risk by diversifying
          investments. According to MPT, an investor can minimize the risk of a
          portfolio by investing in a diverse set of assets that have minimal
          correlation with each other. MPT suggests that investors should focus
          on the risk and return of the overall portfolio, rather than
          individual assets.
        </p>
        <p>
          MPT introduces the concept of the efficient frontier, which represents
          the optimal portfolios that offer the highest possible return for a
          given level of risk or the lowest risk for a given level of return.
          The set of portfolios within the efficient frontier is known as the
          Markowitz Bullet. To find the Capital Market Line (CML), a special
          case of the Capital Allocation Line (CAL), we plot the expected
          returns and standard deviations of various portfolios. The CML is a
          line that is tangent to the efficient frontier, intersects the Y-axis
          (return axis) at the risk-free rate, and identifies the portfolio with
          the highest Sharpe ratio, also known as the market portfolio. The
          Sharpe ratio is a measure of risk-adjusted return that compares the
          excess return of an investment to its volatility.
        </p>
        <img
          src="../photos/project_photos/modernPortfolioTheory/Markowitz_frontier.jpg"
          alt="Theoretical Efficient Frontier"
        />
        <figcaption>
          <i>Theoretical Markowitz Bullet, Efficient Frontier, and CAL</i>
        </figcaption>
        <h2>Analysis</h2>
        <p>
          This text discusses a data project that focuses on portfolio
          optimization, specifically determining optimal portfolio weights for a
          diverse and broad market portfolio comprised of ETFs. The ETFs were
          chosen to represent a diversified ETF-only portfolio, and the Modern
          Portfolio Theory was utilized to find an optimal portfolio weight. To
          gain more insights on this theory, these
          <a
            href="https://www.investopedia.com/terms/m/modernportfoliotheory.asp"
            target="_blank"
          >
            {" "}
            Investopedia{" "}
          </a>
          and
          <a
            href="https://en.wikipedia.org/wiki/Modern_portfolio_theory"
            target="_blank"
          >
            {" "}
            Wikipedia{" "}
          </a>
          articles are recommended to the reader.
        </p>
        <p>
          One of the primary benefits of using ETFs in a portfolio is their
          ability to offer diverse allocations across a range of asset classes
          and sectors. ETFs can hold a broad range of investments such as
          stocks, bonds, commodities, and currencies, which allows investors to
          create a diversified portfolio with ease. This diversification helps
          to spread the risk across different areas of the market, reducing the
          overall risk of the portfolio. Additionally, ETFs can provide exposure
          to international markets, enabling investors to access investment
          opportunities that may not be available in their home market. With the
          ability to easily and cost-effectively invest in a diverse range of
          assets, ETFs can be a valuable tool for achieving a well-diversified
          portfolio.
        </p>
        <p>
          The portfolio comprises of five ETFs, one for each of the following
          markets:
        </p>
        <ul>
          <li>
            Large-cap US:
            <a href="https://finance.yahoo.com/quote/SPY/" target="_blank">
              <strong> SPY </strong>
            </a>
            (SPDR S&P 500 ETF Trust)
          </li>
          <li>
            Small-cap US:
            <a
              href="https://finance.yahoo.com/quote/SLYG?p=SLYG&.tsrc=fin-srch"
              target="_blank"
            >
              <strong> SLYG </strong>
            </a>
            (SPDR S&P 600 Small Cap Growth ETF)
          </li>
          <li>
            International developed-market:
            <a
              href="https://finance.yahoo.com/quote/VEA?p=VEA&.tsrc=fin-srch"
              target="_blank"
            >
              <strong> VEA </strong>
            </a>
            (Vanguard Developed Markets Index Fund)
          </li>
          <li>
            Emerging-market:
            <a
              href="https://finance.yahoo.com/quote/VWO?p=VWO&.tsrc=fin-srch"
              target="_blank"
            >
              <strong> VWO </strong>
            </a>
            (Vanguard Emerging Markets Stock Index Fund)
          </li>
          <li>
            Commodity index tracking fund:
            <a
              href="https://finance.yahoo.com/quote/DBC?p=DBC&.tsrc=fin-srch"
              target="_blank"
            >
              <strong> DBC </strong>
            </a>
            (Invesco DB Commodity Index Tracking Fund)
          </li>
        </ul>
        <p>
          In this data analysis project, we will use MPT (Modern Portfolio
          Theory) to construct an efficient portfolio and optimize our returns.
          To begin, we will gather historical data on a set of stocks and
          calculate their expected returns and standard deviations. We will then
          use this data to construct a Markowitz Bullet and determine the
          optimal portfolio on the efficient frontier.
        </p>
        <h2>Price Changes</h2>
        <span>
          <a
            href="https://nbviewer.org/github/SpencerTimothy/Modern-Portfolio-Theory-Portfolio-Analysis-/blob/main/MPT%20Project.ipynb#price-changes"
            target="_blank"
          >
            <code>{"</>"}</code>
            <i>View Code</i>
          </a>
        </span>
        <p>
          To visualize the price changes for the ETFs in this project, we will
          use Pandas and Matplotlib to chart all of the adjusted closing prices.
          The data used in this analysis project is for one year, from 6/14/2021
          to 6/14/2022. It is worth noting that during the time this analysis
          was conducted, the market had just been declared a bear market.
        </p>
        <div className="mpt-grid">
          <img
            src="../photos/project_photos/modernPortfolioTheory/10Y_T-Note.png"
            alt="10Y Tresury Note"
          />
          <img
            src="../photos/project_photos/modernPortfolioTheory/DBC.png"
            alt="DBC"
          />
          <img
            src="../photos/project_photos/modernPortfolioTheory/VWO.png"
            alt="VWO"
          />
          <img
            src="../photos/project_photos/modernPortfolioTheory/VEA.png"
            alt="VEA"
          />
          <img
            src="../photos/project_photos/modernPortfolioTheory/SLYG.png"
            alt="SLYG"
          />
          <img
            src="../photos/project_photos/modernPortfolioTheory/SPY.png"
            alt="SPY"
          />
        </div>
        <p>
          After obtaining historical data for each ETF using Yahoo Finance API,
          we calculate the current risk-free rate. The risk-free rate is a key
          component in calculating the Sharpe ratio, which we will use to
          determine the optimal portfolio. The Sharpe ratio is the excess return
          per unit of risk, where the risk is measured by the standard deviation
          of the portfolio returns. In this project, we will be using the
          10-year Treasury yield as our risk-free rate, as it is commonly used
          as a benchmark for risk-free returns. As well, the 10 year treasury
          bond rate has been raising rapidly, from around 1.45% to 3.36%.
        </p>
        <h2>Price Correlation</h2>
        <span>
          <a
            href="https://nbviewer.org/github/SpencerTimothy/Modern-Portfolio-Theory-Portfolio-Analysis-/blob/main/MPT%20Project.ipynb#price-correlation"
            target="_blank"
          >
            <code>{"</>"}</code>
            <i>View Code</i>
          </a>
        </span>
        <p>
          Our next step in this project will be to analyze the correlation of
          each of the ETFs in relation to eachother. We will be working with
          Python's Seaborn library to achieve this. The heatmap function in
          Python's Seaborn library can be used to visualize the correlation
          matrix, making it easier to identify stocks that are highly
          correlated. In this case, if the stocks in the portfolio exhibit a
          high correlation despite being well-diversified, it may be necessary
          to re-evaluate the portfolio and make adjustments to reduce the
          overall risk. Therefore, analyzing the correlation matrix is a
          critical step in building a well-diversified stock portfolio that can
          minimize risk and maximize returns.
        </p>
        <p>
          A correlation matrix is an essential tool for analyzing the
          relationships between different variables in a dataset, particularly
          in the case of a stock portfolio. It is used to identify the extent to
          which the returns of various stocks move together, with a high
          correlation indicating that the stocks are moving in a similar
          direction, while a low correlation suggests that the stocks are less
          related. The aim of a diversified stock portfolio is to include stocks
          with low correlations to reduce overall portfolio risk.
        </p>
        <img
          src="../photos/project_photos/modernPortfolioTheory/MPT Heatmap.png"
          alt="Correlation Matrix"
        />
        <figcaption>
          <i>Coorelation Matrix</i>
        </figcaption>
        <p>
          In the case of the ETF portfolio we have chosen, a correlation matrix
          reveals that most of the prices have a positive correlation,
          indicating that their prices have moved in a similar direction with
          each other. However, DBC, a commodities ETF, stands out as an
          exception in this portfolio with a weak correlation to the other ETFs.
          The reason behind this is the current inflationary and geopolitical
          issues, causing the prices of commodities to rise, while most other
          securities have been declining.
        </p>
        <h2>Markowitz Bullet</h2>
        <span>
          <a
            href="https://nbviewer.org/github/SpencerTimothy/Modern-Portfolio-Theory-Portfolio-Analysis-/blob/main/MPT%20Project.ipynb#markowitz-bullet"
            target="_blank"
          >
            <code>{"</>"}</code>
            <i>View Code</i>
          </a>
        </span>
        <p>
          The next step is to generate a graph called the Markowitz Bullet. This
          graph illustrates the risk and return levels of various investment
          portfolios by constructing portfolios with different weights and
          computing their risks and returns. The code written for this project
          creates 10,000 portfolios using a loop by randomly selecting how much
          to invest in each asset. It then stores the data in a table and plots
          it on the graph. The code identifies the portfolio with the highest
          reward-to-risk ratio and adds it as a red "X", and the portfolio with
          the lowest risk and adds it as a black "X" on the chart below. The
          pink dashed line represents the current risk-free rate, which is
          considered to be a constant in this case.
        </p>
        <img
          src="../photos/project_photos/modernPortfolioTheory/Markowitz Bullet.png"
          alt="Markowitz Bullet"
        />
        <figcaption>
          <i>Markowitz Bullet</i>
        </figcaption>
        <p>
          The code also generates the Capital Market Line (CML), which is
          represented by a solid orange line, along with the Markowitz Bullet,
          which is represented by 10,000 blue dots. Assuming the risk-free rate
          is 3.36%, the CML is plotted by finding the line that intersects the
          risk-free asset where the volatility is equal to zero (Y-axis) and is
          tangent to the efficient frontier. The point at which the CML is
          tangent to efficient frontier represents the optimal portfolio, known
          as the "market portfolio." The market portfolio maximizes returns for
          a given level of risk. This portfolio has the highest Sharpe ratio
          among all the randomly selected portfolio options.
        </p>
        <h2>Asset Allocation</h2>
        <span>
          <a
            href="https://nbviewer.org/github/SpencerTimothy/Modern-Portfolio-Theory-Portfolio-Analysis-/blob/main/MPT%20Project.ipynb#asset-allocation"
            target="_blank"
          >
            <code>{"</>"}</code>
            <i>View Code</i>
          </a>
        </span>
        <p>
          To construct an optimal investment strategy, it is valuable to
          visualize the asset allocation of each portfolio. By using pie charts,
          we can see the relative weights assigned to each asset in the
          portfolio, which makes it easier to understand the diversification and
          balance of the investment.
        </p>
        <img
          src="../photos/project_photos/modernPortfolioTheory/Max Sharpe Ratio Portfolio Allocation Pie Chart.png"
          alt="Market Portfolio Allocation Pie Chart"
        />
        <figcaption>
          <i>Market Portfolio Allocation</i>
        </figcaption>
        <p>
          The first pie chart shows the asset allocation for the maximum Sharpe
          ratio portfolio. This portfolio has the highest risk-adjusted return
          and is considered the optimal portfolio based on Modern Portfolio
          Theory. The chart clearly shows that the SPY ETF accounts for the
          majority of the portfolio, with a weight of 73.9%. The remaining 26.1%
          is split among four other ETFs, with DBC and VWO accounting for the
          largest portion of the remaining weight. Overall, this chart shows
          that the portfolio is heavily weighted towards US equities, with some
          exposure to international equities and commodities.
        </p>
        <img
          src="../photos/project_photos/modernPortfolioTheory/Minimum Risk Allocation Portfolio Pie Chart.png"
          alt="Minimum Risk Portfolio Allocation Pie Chart"
        />
        <figcaption>
          <i>Minimum Risk Portfolio Allocation</i>
        </figcaption>
        <p>
          The second pie chart shows the asset allocation for the portfolio with
          minimum risk. This portfolio is considered optimal for investors who
          prioritize low volatility over higher returns. The chart shows that
          the portfolio is heavily weighted towards VWO ETF, which accounts for
          almost half of the portfolio weight at 49.8%. The remaining weight is
          split among SPY, DBC, VEA, and SLYG ETFs. This chart shows that the
          portfolio is also heavily weighted towards equities, with some
          exposure to commodities.
        </p>
        <p>
          Overall, the pie charts provide a clear visualization of the asset
          allocation for each portfolio, making it easier for investors to
          understand and make informed decisions about their investment
          strategies.
        </p>
        <p>
          Now that we have the optimal weights for each portfolio, we can
          construct the actual return for each portfolio, as well as the
          annualized return (the year-over-year return based on the interval of
          data researched if the given weights were invested).
        </p>
        <p>
          For the <b>minimum risk portfolio</b> (the portfolio with the minimum
          Sharpe Ratio), the optimal weights are:
        </p>
        <ul>
          <li>SPY: 32.86% portfolio allocation</li>
          <li>SLYG: 1.55% portfolio allocation</li>
          <li>VEA: 3.84% portfolio allocation</li>
          <li>VWO: 49.81% portfolio allocation</li>
          <li>DBC: 11.94% portfolio allocation</li>
        </ul>
        <p>
          Using these weights, we found that the portfolio had a slightly
          positive annualized <b>return of 0.01%</b> and a{" "}
          <b>volatility of 14.96%</b>. However, it is not recommended to invest
          in this portfolio, as the risk-free rate is considered to be 0% risk
          with a 3.34% return at this time.
        </p>
        <p>
          For the <b>market portfolio</b> (the maximum Sharpe Ratio portfolio),
          the optimal weights are:
        </p>
        <ul>
          <li>SPY: 73.87% portfolio allocation</li>
          <li>SLYG: 1.26% portfolio allocation</li>
          <li>VEA: 7.25% portfolio allocation</li>
          <li>VWO: 8.81% portfolio allocation</li>
          <li>DBC: 8.80% portfolio allocation</li>
        </ul>
        <p>
          This portfolio has an annualized <b>return of 27.78%</b> and an
          annualized <b>volatility of 18.89%</b>. While the volatility is higher
          than the minimum Sharpe Ratio portfolio and even much higher than the
          risk-free rate, the annualized return is significantly higher.
        </p>
        <p>
          Additionally, the last year's return on the market portfolio (not
          annualized) would have been 33.26%.
        </p>
        <h2>Conclusion</h2>
        <p>
          In addition to pie charts, investors can also visualize the
          correlation matrix and efficient frontier to further analyze and
          optimize their investment strategies. The correlation matrix provides
          insight into the correlation between different assets in the
          portfolio, allowing investors to identify potentially redundant assets
          and ensure proper diversification. The efficient frontier, on the
          other hand, shows the maximum return that can be achieved for a given
          level of risk, helping investors to identify the optimal combination
          of assets for their desired risk level. By utilizing these additional
          tools, investors can gain a more comprehensive understanding of their
          investment options and make more informed decisions about their
          portfolios.
        </p>
        <p>
          As a final thought, it is important to note that Modern Portfolio
          Theory only uses historical data to find the optimal portfolio for
          that given period of time. It is only a theoretical tool to use when
          finding an optimal portfolio.
        </p>
        <p style={{ fontWeight: "500", textAlign: "center" }}>
          <i>
            To view the code for this project, please visit this{" "}
            <a
              href="https://nbviewer.org/github/SpencerTimothy/Modern-Portfolio-Theory-Portfolio-Analysis-/blob/main/MPT%20Project.ipynb"
              target="_blank"
            >
              link
            </a>
          </i>
        </p>
        <OnlyResumeButton />
      </div>
    </div>
  );
};

export default ModernPortfolioTheory;
