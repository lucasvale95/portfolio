import { About, Div } from "./style";
import TypeWriterEffect from "react-typewriter-effect";

function AboutPage() {
  return (
    <>
      <About>
        <div className="avatar"></div>
        <Div>
          <h2>Lucas Vale</h2>
          <TypeWriterEffect
            textStyle={{ fontFamily: "Dosis" }}
            white-space="nowrap"
            startDelay={100}
            cursorColor="#ffc600"
            text="Desenvolvedor Full Stack"
            typeSpeed={150}
            eraseSpeed={100}
            fontWeight={100}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis
            nibh leo, vitae pharetra felis elementum quis.
          </p>

          <p>
            Ulla non neque luctus, rhoncus nunc vel, volutpat eros. Maecenas
            gravida nisl lorem. Sed nec vulputate libero.
          </p>
        </Div>
      </About>
    </>
  );
}

export default AboutPage;
