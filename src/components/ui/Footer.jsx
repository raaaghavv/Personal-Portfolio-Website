import GutterDiv from "./GutterDiv";

const Footer = () => (
  <>
    <GutterDiv />

    <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 text-center text-sm text-[var(--muted-foreground)] ">
      <div className="relative border-x border-[var(--popover-border)] w-full max-w-3xl mx-auto px-4 py-6 font-IBMMono screen-line-after">
        <p>Inspired by chanhdai.com & peerlist.io</p>
        <p>
          Built by{" "}
          <a
            href="https://github.com/raaaghavv"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--foreground)] hover:underline rounded-md"
          >
            raaaghavv
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/raaaghavv/Personal-Portfolio-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--foreground)] hover:underline rounded-md"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  </>
);
export default Footer;
