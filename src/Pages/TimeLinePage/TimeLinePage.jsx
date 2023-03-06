import React from "react";
import Activity from "@components/ActivityCard/Activity";
import "./TimeLinePage.css";

const sampleRes = [
  {
    id: 1,
    type: "Fashion",
    title: "Dover Street Market",
    durationMs: 134,
    description: "shopping mall in London Trafalgar Sq.",
  },
  {
    id: 1,
    type: "Fashion",
    title: "Liberty",
    durationMs: 134,
    description: "shopping mall in London Trafalgar Sq.",
  },
  {
    id: 1,
    type: "Fashion",
    title: "Selfridges",
    durationMs: 134,
    description: "shopping mall in London Trafalgar Sq.",
  },

  {
    id: 1,
    type: "Fashion",
    title: "Selfridges",
    durationMs: 134,
    description: "shopping mall in London Trafalgar Sq.",
  },

  {
    id: 1,
    type: "Fashion",
    title: "Selfridges",
    durationMs: 134,
    description: "shopping mall in London Trafalgar Sq.",
  },

  {
    id: 1,
    type: "Fashion",
    title: "Selfridges",
    durationMs: 134,
    description: "shopping mall in London Trafalgar Sq.",
  },

  {
    id: 1,
    type: "Fashion",
    title: "Selfridges",
    durationMs: 134,
    description: "shopping mall in London Trafalgar Sq.",
  },

  {
    id: 1,
    type: "Fashion",
    title: "Selfridges",
    durationMs: 134,
    description: "shopping mall in London Trafalgar Sq.",
  },

  {
    id: 1,
    type: "Fashion",
    title: "Selfridges",
    durationMs: 134,
    description: "shopping mall in London Trafalgar Sq.",
  },

  {
    id: 1,
    type: "Fashion",
    title: "Selfridges",
    durationMs: 134,
    description: "shopping mall in London Trafalgar Sq.",
  },

  {
    id: 1,
    type: "Fashion",
    title: "Selfridges",
    durationMs: 134,
    description: "shopping mall in London Trafalgar Sq.",
  },

  {
    id: 1,
    type: "Fashion",
    title: "Selfridges",
    durationMs: 134,
    description: "shopping mall in London Trafalgar Sq.",
  },
];

const TimeLine = () => {
  const activities = sampleRes.map((res, i) => {
    return <Activity key={i} data={res} />;
  });
  return (
    <>
      <section className="timeline_page timeline_section">
        <h1>Timeline</h1>
        <ul>{activities}</ul>
      </section>
    </>
  );
};

export default TimeLine;
