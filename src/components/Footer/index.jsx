import { FooterWrapper, Social } from "./footer.style";
export default function Footer() {
  return (
    <FooterWrapper>
      <Social>
        <li>
          <a
            href="https://gmouradev.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Portfólio
          </a>
          <div />
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gabriel-moura-b63382161/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Linkedin
          </a>
          <div />
        </li>
        <li>
          <a
            href="https://github.com/gbmouraa"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          <div />
        </li>
      </Social>
    </FooterWrapper>
  );
}
