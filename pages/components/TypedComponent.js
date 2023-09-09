'use client'

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Comfort &amp; Support'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: false,
      showCursor: false
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className='slogan' ref={typedRef}></span>;
};

export default TypedComponent;
