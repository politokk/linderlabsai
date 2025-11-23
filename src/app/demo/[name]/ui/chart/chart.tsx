import { AreaChartComponent } from "./area-chart";
import { BarChartComponent } from "./bar-chart";
import { PieChartComponent } from "./pie-chart";

import ChartBarDemo from "./chart-bar-demo";
import ChartBarDemoAxis from "./chart-bar-demo-axis";
import ChartBarDemoGrid from "./chart-bar-demo-grid";
import ChartBarDemoLegend from "./chart-bar-demo-legend";
import ChartBarDemoTooltip from "./chart-bar-demo-tooltip";
import ChartTooltipDemo from "./chart-tooltip-demo";

export const chart = {
  name: "chart",
  components: {
    BarChart: <BarChartComponent />,
    AreaChart: <AreaChartComponent />,
    PieChart: <PieChartComponent />,
    BarDemo: <ChartBarDemo />,
    BarDemoAxis: <ChartBarDemoAxis />,
    BarDemoGrid: <ChartBarDemoGrid />,
    BarDemoLegend: <ChartBarDemoLegend />,
    BarDemoTooltip: <ChartBarDemoTooltip />,
    Tooltip: <ChartTooltipDemo />,
  },
};
