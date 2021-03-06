import React from "react";
import Icon from "../icon/icon.component";
import useOnScreen from "../../hooks/use-on-screen";
import "./about.styles.scss";

const About = () => {
  /*  UseOnScreen:  Displays ribbon logo when about component is 60% visible
      setRef:       Callback function returned from useOnScreen that sets it's
                   'ref' state with the referenced DOM element.
      visible:      useOnScreen state indicating if element has intersected. */
  const [setRef, visible] = useOnScreen({ threshold: 0.5 });

  return (
    <section className="about-component" ref={setRef}>
      <div className="ribbon-container">
        <div className={"ribbon" + (visible ? " visible" : "")}>
          <Icon icon="logomark" />
        </div>
      </div>
      <div className="about-content page-width">
        <h2>Simplicity is the ultimate sophistication.</h2>
        <p className="about-text">
          Good design is obvious. Great design is transparent. No matter what
          style is trending right now, minimalism is here to stay. From
          mid-century classics to today’s icons, our furniture is tested for
          quality and built to last. We’re happy you’re here. Thanks for
          shopping with us!
        </p>
      </div>
    </section>
  );
};

export default About;
