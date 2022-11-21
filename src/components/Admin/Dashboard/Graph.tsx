import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { FC, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/ThemeCtx";
import { TDashboardGraph } from "../../../types/dashboard";

type TProps = {
  graph: TDashboardGraph;
};

const Graph: FC<TProps> = ({ graph }) => {
  const { theme } = useContext(ThemeContext);
  const lightTheme = {
    color: "#262a2e",
    border: ["#9dacbd", "#b8c5d3", "#4f81b365"],
    point: "#dd44c4",
    hover: { color: "#e446e4" },
  };
  const darkTheme = {
    color: "#b3bfcc",
    border: ["#495b69", "#384855", "#9cbfe094"],
    point: "#ffa6f0",
    hover: { color: "#e446e4" },
  };
  const [style, setStyle] = useState(lightTheme);
  useEffect(() => {
    if (theme === "dark") {
      setStyle(darkTheme);
    } else {
      setStyle(lightTheme);
    }
  }, [theme]);
  const thousandsSeparators = (num: string | number) => {
    const num_parts = num.toString().split(",");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return num_parts.join(",");
  };

  return (
    <Main>
      <Line
        data={{
          labels: graph.labels,
          datasets: [
            {
              label: "Pendapatan",
              fill: false,
              hoverBackgroundColor: style.hover.color,
              hoverBorderWidth: 0,
              pointHoverBorderWidth: 5,
              pointHoverBorderColor: style.border[2],
              pointBorderWidth: 0,
              pointRadius: 4,
              borderJoinStyle: "bevel",
              borderColor: style.border[2],
              borderWidth: 4,
              pointBackgroundColor: style.point,
              data: graph.data,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: style.color,
              },
              display: false,
              position: "top",
            },
          },
          scales: {
            y: {
              grid: { borderColor: style.border[0], color: style.border[1] },
              ticks: {
                color: style.color,
                callback: function (value, index, values) {
                  return "Rp" + thousandsSeparators(value);
                },
              },
              beginAtZero: true,
            },
            x: {
              grid: { borderColor: style.border[0], color: style.border[1] },
              ticks: {
                color: style.color,
              },
              beginAtZero: true,
            },
          },
        }}
      ></Line>
    </Main>
  );
};

export default Graph;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  min-width: 40rem;
`;
