import { AreaChartComponent } from "./area-chart";
import { BarChartComponent } from "./bar-chart";
import { PieChartComponent } from "./pie-chart";

import ChartBarDemo from "./chart-bar-demo";
import ChartBarDemoAxis from "./chart-bar-demo-axis";
import ChartBarDemoGrid from "./chart-bar-demo-grid";
import ChartBarDemoLegend from "./chart-bar-demo-legend";
import ChartBarDemoTooltip from "./chart-bar-demo-tooltip";
import ChartTooltipDemo from "./chart-tooltip-demo";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function chart() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Bar Chart" icon="BarChart3">
          <BarChartComponent />
        </ComponentWrapper>
        <ComponentWrapper name="Area Chart" icon="LineChart">
          <AreaChartComponent />
        </ComponentWrapper>
        <ComponentWrapper name="Pie Chart" icon="PieChart">
          <PieChartComponent />
        </ComponentWrapper>
        <ComponentWrapper name="Bar Demo" icon="BarChart">
          <ChartBarDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Bar Demo Axis" icon="Axis3d">
          <ChartBarDemoAxis />
        </ComponentWrapper>
        <ComponentWrapper name="Bar Demo Grid" icon="Grid3x3">
          <ChartBarDemoGrid />
        </ComponentWrapper>
        <ComponentWrapper name="Bar Demo Legend" icon="Layers">
          <ChartBarDemoLegend />
        </ComponentWrapper>
        <ComponentWrapper name="Bar Demo Tooltip" icon="MessageSquare">
          <ChartBarDemoTooltip />
        </ComponentWrapper>
        <ComponentWrapper name="Tooltip" icon="Info">
          <ChartTooltipDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}
