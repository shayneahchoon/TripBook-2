import React from 'react';
import ActivityEditorCard from "@components/ActivityEditorCard/ActivityEditorCard";
import './TimeLineEditPage.css'

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

const TimeLineEditPage = () => {
    const items = sampleRes.map((activity, index) => {
        return <ActivityEditorCard key={index} data={activity}/>;
    });

    return (
      <>
        <section className="timeline_edit_page">
          <h1>Timeline Edit</h1>
          <ul>{items}</ul>
        </section>
      </>
    ); 
}

export default TimeLineEditPage;