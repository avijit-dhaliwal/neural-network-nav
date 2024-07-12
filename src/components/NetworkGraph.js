import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useNavigate } from 'react-router-dom';
import '../styles/NetworkGraph.css';

const NetworkGraph = ({ data }) => {
  const svgRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = window.innerHeight;

    svg.attr('width', width).attr('height', height);

    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id(d => d.id))
      .force('charge', d3.forceManyBody().strength(-1000))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.append('g')
      .selectAll('line')
      .data(data.links)
      .enter().append('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6);

    const node = svg.append('g')
      .selectAll('circle')
      .data(data.nodes)
      .enter().append('circle')
      .attr('r', 20)
      .attr('fill', d => d.color)
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    node.append('title')
      .text(d => d.id);

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    });

    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    node.on('click', (event, d) => {
      navigate(`/${d.id}`);
    });

  }, [data, navigate]);

  return <svg ref={svgRef}></svg>;
};

export default NetworkGraph;