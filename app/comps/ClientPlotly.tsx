import Plot from "react-plotly.js"
import { ClientOnly } from "remix-utils"

const Plotly = () => (
    <Plot
        data={[
            {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]}
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
    />
)

const ClientPlotly = () => (
    <ClientOnly fallback={<div></div>}>
        {() => <Plotly />}
    </ClientOnly>
)

export default ClientPlotly