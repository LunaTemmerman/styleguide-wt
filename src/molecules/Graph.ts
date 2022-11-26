import '../style.css';

export const createGraph = ({}) => {
  const div = document.createElement('div');
  div.className = 'container--graph';
  const graph = document.createElement('canvas');
  graph.id = 'myChart';
  div.appendChild(graph);
  return div;
};
