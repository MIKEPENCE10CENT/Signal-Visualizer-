function getSignalExpression() {
  const amplitude = document.getElementById("amplitude").value;
  const sigma = document.getElementById("sigma").value;
  const omega = document.getElementById("omega").value;

  if (amplitude && sigma && omega) {
    const expression = `${amplitude} * exp((${sigma} + j${omega}) * t)`;
    document.getElementById("expressionOutput").innerHTML = `Signal Expression: ${expression}`;
  } else {
    alert("Please enter all values.");
  }
}

function plotSignal() {
  const amplitude = document.getElementById("amplitude").value;
  const sigma = document.getElementById("sigma").value;
  const omega = document.getElementById("omega").value;

  if (amplitude && sigma && omega) {
    const t = Array.from({length: 100}, (_, i) => i / 10);
    const signal = t.map(time => amplitude * Math.exp((sigma * time)) * Math.cos(omega * time));

    const trace = {
      x: t,
      y: signal,
      type: 'scatter'
    };

    const layout = {
      title: 'Signal Plot',
      xaxis: {title: 'Time (t)'},
      yaxis: {title: 'Amplitude'},
    };

    Plotly.newPlot('plotOutput', [trace], layout);
  } else {
    alert("Please enter all values.");
  }
}
