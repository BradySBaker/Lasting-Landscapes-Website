import {useRef, useEffect, useState} from 'react';

function LazyImage({ src, onClick }: any) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !loaded.current) {
        loaded.current = true;
        setShow(true);
        obs.disconnect();
      }
    }, {
      rootMargin: "200px",
    });

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={show ? src : undefined}
      className="ironworks-img"
      onClick={onClick}
    />
  );
}

export default LazyImage;