import React from 'react'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with this trainer has completely transformed my approach to fitness and nutrition. I feel healthier and more energized than ever.",
      name: "Sarah Chen",
      designation: "Corporate Professional",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The customized plans and one-on-one coaching have been life-changing. I’ve achieved goals I never thought possible.",
      name: "Michael Rodriguez",
      designation: "Entrepreneur",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The knowledge and support provided have been incredible. I've learned so much about proper nutrition and sustainable fitness.",
      name: "Emily Watson",
      designation: "Busy Parent",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The training sessions are always challenging yet fun. I've never felt more confident in my own skin!",
      name: "James Kim",
      designation: "Software Engineer",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The personalized approach to fitness and nutrition has been a game-changer for me. I’ve lost weight, gained muscle, and feel amazing!",
      name: "Lisa Thompson",
      designation: "Marketing Executive",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  
  return(

    <div className="bg-bgblack">


    <AnimatedTestimonials testimonials={testimonials} />;
    </div>
  ) 
}

export default Testimonials