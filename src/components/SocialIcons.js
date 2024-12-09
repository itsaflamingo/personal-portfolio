/**
 * A component that renders social media icons to link to my profiles.
 *
 * Contains links to my LinkedIn, GitHub, Twitter, and CodePen profiles.
 *
 * @returns A JSX element containing the social media icons.
 */
export default function SocialIcons() {
  return (
    <div className="h-[40px] flex justify-center align-center gap-2 text-2xl">
      <a
        href="https://www.linkedin.com/in/elizabeth-pinero-984471177/"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer self-center"
      >
        <i className="devicon-linkedin-plain icon"></i>
      </a>
      <a
        href="https://github.com/itsaflamingo"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer self-center"
      >
        <i className="devicon-github-original icon"></i>
      </a>
      <a
        href="https://twitter.com/lizpinero_"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer self-center"
      >
        <i className="devicon-twitter-original icon"></i>
      </a>
      <a
        href="https://codepen.io/Elizabeth-Pinero"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer self-center"
      >
        <i className="devicon-codepen-original icon"></i>
      </a>
    </div>
  );
}
