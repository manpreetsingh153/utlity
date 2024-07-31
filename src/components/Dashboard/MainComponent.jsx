"use client"
import React, { useEffect } from 'react';

const MainComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      let sidebar = document.getElementsByClassName("sidebar")[0];
      let sidebarContent = document.getElementsByClassName("content-wrapper")[0];
      let scrollTop = window.scrollY;
      let viewportHeight = window.innerHeight;
      let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;
      let contentHeight = sidebarContent.getBoundingClientRect().height;

      if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
        sidebarContent.style.transform = `translateY(-${contentHeight - viewportHeight + sidebarTop}px)`;
        sidebarContent.style.position = "fixed";
      } else {
        sidebarContent.style.transform = "";
        sidebarContent.style.position = "";
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="main">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="sidebar">
        <div className="content-wrapper">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
